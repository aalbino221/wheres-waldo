import { useContext } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../App';
import formatTime from '../reusuable/formatTimeFunction';

const CurrentGameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > div:nth-child(1) {
    height: 80px;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  & > div > img {
    height: 50%;
    object-fit: cover;
    object-position: center;
  }
  & h2 {
    font-weight: 400;
    color: #000000ef;
  }
`;

export default function CurrentGame() {
  const { selectedGame } = useContext(StateContext)[0];
  const { timer } = useContext(StateContext)[1];

  return (
    <CurrentGameDiv>
      <div>
        {selectedGame.characters.map((character: any, index: number) => {
          return (
            <img
              key={index}
              src={character.photo}
              style={{ filter: character.found ? 'grayscale(100%)' : '' }}
              alt=""
            />
          );
        })}
      </div>
      <div>
        <h2>{formatTime(timer)}</h2>
      </div>
    </CurrentGameDiv>
  );
}
