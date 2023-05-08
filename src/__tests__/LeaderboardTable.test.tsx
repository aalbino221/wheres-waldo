/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom'; // optional
import { render, screen, waitFor, act } from '@testing-library/react';
import { StateContext } from '../App';
import LeaderboardTable from '../components/Leaderboard/LeaderboardTable';
import getTableData from '../firebase/firestore/getTableData';

jest.mock('../firebase/firestore/getTableData');

it('Fetches Leaderboard Data correctly', async () => {
  const fakeData = [{ name: 'Jorge' }, { name: 'Jefinho' }];
  (getTableData as jest.Mock).mockResolvedValue(fakeData);
  const selectedLeaderboard = 1;
  const setSelectedLeaderboard = () => {};
  await act(async () => {
    render(
      <StateContext.Provider
        value={[[], [], { selectedLeaderboard, setSelectedLeaderboard }]}
      >
        <LeaderboardTable />
      </StateContext.Provider>,
    );
  });
  await waitFor(() => screen.getByText('Jorge'));
  expect(screen.getByText('Jorge')).toBeInTheDocument();
  expect(screen.getByText('Jefinho')).toBeInTheDocument();
});
