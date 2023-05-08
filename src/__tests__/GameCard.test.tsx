/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom'; // optional
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameCard from '../components/Home/GameCard';
import { HashRouter } from 'react-router-dom';
import { StateContext } from '../App';

//mock Link
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <div onClick={() => {}}> {children}</div>
  ),
}));

const mockInfo = {
  id: 1,
  title: 'Beach',
  img: 'beach',
  characters: [
    { name: 'waldo', found: false, photo: '' },
    { name: 'wenda', found: false, photo: '' },
    { name: 'odlaw', found: false, photo: '' },
    { name: 'wizard', found: false, photo: '' },
  ],
};

let selectedGame = {
  id: 0,
  title: '',
  img: '',
  characters: [],
};

const setSelectedGame = (item: any) => (selectedGame = item);

describe('GameCard Component', () => {
  afterEach(cleanup);
  it('should render the component', () => {
    render(
      <HashRouter>
        <GameCard cardInfo={mockInfo} />
      </HashRouter>,
    );
    expect(screen.getByText('Beach')).toBeInTheDocument();
  });
  it('Updates selectedGame state correctly', async () => {
    const user = userEvent.setup();
    render(
      <StateContext.Provider value={[{ selectedGame, setSelectedGame }]}>
        <HashRouter>
          <GameCard cardInfo={mockInfo} />
        </HashRouter>
        ,
      </StateContext.Provider>,
    );
    const button = screen.getByRole('button');
    await user.click(button);
    expect(selectedGame.id).toBe(1);
  });
});
