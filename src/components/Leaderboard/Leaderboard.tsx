import styled from 'styled-components';
import LeaderboardCards from './LeaderboardCards';
import LeaderboardTables from './LeaderboardTable';
import cardInfo from '../Home/CardInfo';
import { StateContext } from '../../App';
import { useContext, useEffect } from 'react';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  & > h1 {
    margin-bottom: 0;
  }
  & > div:first-of-type {
    display: flex;
    width: 100%;
    gap: 3rem;
    justify-content: center;
  }
`;

export default function Leaderboard() {
  const { setTimer } = useContext(StateContext)[1];
  useEffect(() => {
    setTimer(0);
  });
  return (
    <Div>
      <h1>Leaderboard</h1>
      <div>
        {cardInfo.map((item) => (
          <LeaderboardCards cardInfo={item} key={item.id} />
        ))}
      </div>
      <LeaderboardTables />
    </Div>
  );
}
