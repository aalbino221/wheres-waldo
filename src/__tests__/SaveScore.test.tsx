/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom'; // optional
import { render, screen } from '@testing-library/react';
import { StateContext } from '../App';
import SaveScore from '../components/Game/SaveScore';

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

let timer = 5;
const setTimer = (item: number) => (timer = item);

it('Gets the correct time from Timer', async () => {
  render(
    <StateContext.Provider
      value={[
        { selectedGame: mockInfo, setSelectedGame: () => {} },
        { timer, setTimer },
        { selectedLeaderboard: 1, setSelectedLeaderboard: () => {} },
      ]}
    >
      <SaveScore />
    </StateContext.Provider>,
  );
  expect(screen.getByText(/00:00:05/)).toBeInTheDocument();
});
