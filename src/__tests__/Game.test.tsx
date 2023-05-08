import '@testing-library/jest-dom'; // optional
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StateContext } from '../App';
import Game from '../components/Game/Game';
import beach from '../assets/background/beach.jpg';
import ski from '../assets/background/ski.jpg';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

const mockInfo = {
  id: 1,
  title: 'Beach',
  img: beach,
  characters: [
    { name: 'waldo', found: false, photo: '' },
    { name: 'wenda', found: false, photo: '' },
    { name: 'odlaw', found: false, photo: '' },
    { name: 'wizard', found: false, photo: '' },
  ],
};

const mockInfo2 = {
  id: 2,
  title: 'ski',
  img: ski,
  characters: [
    { name: 'waldo', found: true, photo: '' },
    { name: 'wenda', found: true, photo: '' },
    { name: 'odlaw', found: true, photo: '' },
    { name: 'wizard', found: true, photo: '' },
  ],
};

const mockInfo3 = {
  id: 2,
  title: 'ski',
  img: ski,
  characters: [
    { name: 'waldo', found: false, photo: '' },
    { name: 'wenda', found: true, photo: '' },
    { name: 'odlaw', found: true, photo: '' },
    { name: 'wizard', found: true, photo: '' },
  ],
};

it.skip('Verify area - returns true if the user clicks on the correct area', async () => {
  const user = userEvent.setup();
  render(
    <StateContext.Provider
      value={[
        {
          selectedGame: mockInfo,
          setSelectedGame: () => {
            1;
          },
        },
        [],
        [],
      ]}
    >
      <Game />
    </StateContext.Provider>,
  );
  const img = screen.getByRole('img');
  await user.click(img);
});

describe.skip('verifyAllFound', () => {
  it('calls SaveScore if all characters are found', async () => {
    render(
      <StateContext.Provider
        value={[
          {
            selectedGame: mockInfo2,
            setSelectedGame: () => {
              1;
            },
          },
          [],
          [],
        ]}
      >
        <Game />
      </StateContext.Provider>,
    );
    expect(screen.getByText(/SUBMIT/)).toBeInTheDocument();
  });
  it('Does not call SaveScore if all characters are not found', async () => {
    render(
      <StateContext.Provider
        value={[
          {
            selectedGame: mockInfo,
            setSelectedGame: () => {
              1;
            },
          },
          [],
          [],
        ]}
      >
        <Game />
      </StateContext.Provider>,
    );
    expect(screen.queryByText(/SUBMIT/)).not.toBeInTheDocument();
  });
});
