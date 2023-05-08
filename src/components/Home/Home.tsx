import { useEffect, useContext } from 'react';
import styled from 'styled-components';
import cardInfo from './CardInfo';
import GameCard from './GameCard';
import { StateContext } from '../../App';

const HomeDiv = styled.div`
  display: flex;
  padding: 0 4rem;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  height: 70vh;
  flex-wrap: wrap;
`;

export default function Home() {
  const { setSelectedGame } = useContext(StateContext)[0];
  const { setTimer } = useContext(StateContext)[1];
  useEffect(() => {
    setTimer(0);
    setSelectedGame(cardInfo[0]);
  }, []);
  return (
    <HomeDiv>
      {cardInfo.map((info) => (
        <GameCard cardInfo={info} key={info.id} />
      ))}
    </HomeDiv>
  );
}
