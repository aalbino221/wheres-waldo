import styled from 'styled-components';
import LeaderboardCards from './LeaderboardCards';
import LeaderboardTables from './LeaderboardTable';

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
  return (
    <Div>
      <h1>Leaderboard</h1>
      <div>
        <LeaderboardCards />
        <LeaderboardCards />
        <LeaderboardCards />
      </div>
      <LeaderboardTables />
    </Div>
  );
}
