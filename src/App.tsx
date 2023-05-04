import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import Leaderboard from './components/Leaderboard/Leaderboard';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
