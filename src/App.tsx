import React, { useState, createContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import Leaderboard from './components/Leaderboard/Leaderboard';
import './App.css';

const StateContext = createContext<any>([{}]);

function App() {
  const [selectedGame, setSelectedGame] = useState({
    id: 0,
    title: '',
    img: '',
    characters: [],
  });
  const [timer, setTimer] = useState(0);
  const [selectedLeaderboard, setSelectedLeaderboard] = useState(1);

  return (
    <StateContext.Provider
      value={[
        { selectedGame, setSelectedGame },
        { timer, setTimer },
        { selectedLeaderboard, setSelectedLeaderboard },
      ]}
    >
      <div className="App">
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </HashRouter>
      </div>
    </StateContext.Provider>
  );
}

export default App;
export { StateContext };
