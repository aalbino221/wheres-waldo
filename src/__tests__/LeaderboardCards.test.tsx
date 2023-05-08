/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom'; // optional
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StateContext } from '../App';
import LeaderboardCards from '../components/Leaderboard/LeaderboardCards';

const mockInfo = {
  id: 2,
  title: 'Beach',
  img: 'beach',
  characters: [
    { name: 'waldo', found: false, photo: '' },
    { name: 'wenda', found: false, photo: '' },
    { name: 'odlaw', found: false, photo: '' },
    { name: 'wizard', found: false, photo: '' },
  ],
};

it('Set selectedLeaderboard correctly', async () => {
  let selectedLeaderboard = 1;
  const setSelectedLeaderboard = (item: number) => (selectedLeaderboard = item);
  render(
    <StateContext.Provider
      value={[[], [], { selectedLeaderboard, setSelectedLeaderboard }]}
    >
      <LeaderboardCards cardInfo={mockInfo} />
    </StateContext.Provider>,
  );
  const button = screen.getByRole('button');
  await userEvent.click(button);
  expect(selectedLeaderboard).toBe(2);
});
