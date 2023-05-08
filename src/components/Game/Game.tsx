/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prefer-const */
import { useState, useContext, useEffect, useRef, Key } from 'react';
import GameDiv from './GameStyle';
import SaveScore from './SaveScore';
import { StateContext } from '../../App';
import getCoordinates from '../../firebase/firestore/getCoordinates';
import { Square } from './GameStyle';

export default function Game() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);
  const [squares, setSquares] = useState<{ x: number; y: number }[]>([]);
  const { selectedGame, setSelectedGame } = useContext(StateContext)[0];
  const { timer, setTimer } = useContext(StateContext)[1];
  const { setGameTime } = useContext(StateContext)[3];

  const verifyCoordinates = async (e: any, x: number, y: number) => {
    const characterCoordinates = await getCoordinates(selectedGame.id);
    const character = characterCoordinates.find((char: any) => {
      return (
        char.xCoordinates - 20 <= x &&
        x <= char.xCoordinates + 20 &&
        char.yCoordinates - 25 <= y &&
        y <= char.yCoordinates + 25
      );
    });
    setSelectedGame((prevSelectedGame: any) => {
      const updatedCharacters = prevSelectedGame.characters.map((char: any) => {
        const character = characterCoordinates.find(
          (c: any) => c.name === char.name,
        );
        if (
          character &&
          x >= character.xCoordinates - 15 &&
          x <= character.xCoordinates + 15 &&
          y >= character.yCoordinates - 20 &&
          y <= character.yCoordinates + 20
        ) {
          return { ...char, found: true };
        }
        return char;
      });
      return { ...prevSelectedGame, characters: updatedCharacters };
    });
    return character;
  };

  const convertCoordinates = (x: number, y: number) => {
    const { clientWidth: currentX, clientHeight: currentY } = imgRef.current!;
    const { originalX, originalY } = selectedGame.img;
    const ratioX = originalX / currentX;
    const ratioY = originalY / currentY;
    return [ratioX * x, ratioY * y];
  };

  const handleClick = async (event: any) => {
    const xCoord = event.pageX - event.currentTarget.offsetLeft;
    const yCoord = event.pageY - event.currentTarget.offsetTop;
    const [x, y] = convertCoordinates(xCoord, yCoord);
    const change = await verifyCoordinates(event, x, y);
    if (change) {
      addSquare(event.pageX, event.pageY);
    }
  };

  const verifyAll = () => {
    const allFound = selectedGame.characters.every(
      (character: any) => character.found,
    );
    allFound ? finishGame() : '';
  };

  const finishGame = () => {
    setVisible(true);
  };

  const addSquare = (x: number, y: number) => {
    setSquares([...squares, { x, y }]);
  };

  useEffect(() => {
    verifyAll();
  }, [selectedGame.characters]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev: number) => prev + 10);
      if (visible) {
        clearInterval(interval);
      }
    }, 10);
    return () => {
      setGameTime(timer);
      clearInterval(interval);
    };
  }, [visible]);

  return (
    <GameDiv>
      {squares.map(
        (square: { x: number; y: number }, index: Key | null | undefined) => (
          <Square key={index} x={square.x} y={square.y} />
        ),
      )}{' '}
      <img
        src={selectedGame.img.link}
        alt=""
        onClick={handleClick}
        ref={imgRef}
      />
      {visible ? <SaveScore /> : ''}
    </GameDiv>
  );
}
