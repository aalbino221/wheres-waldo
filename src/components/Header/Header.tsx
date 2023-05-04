import React from 'react';
import StyledLink from '../reusuable/Link';
import CurrentGame from './CurrentGame';
import DivHeader from './HeaderStyle';
import waldoHeader from '../../assets/icons/waldo-header.jpg';

const Link = StyledLink;

export default function Header() {
  return (
    <DivHeader>
      <div>
        <Link to="./">
          <div>
            <img src={waldoHeader} />
          </div>
          <p>
            <span>Where's</span> <span>Waldo?</span>
          </p>
        </Link>
      </div>
      <div>
        <div style={{ display: 'none' }}>
          <CurrentGame />
        </div>
      </div>
      <div>
        <Link to="./leaderboard">
          <button>
            <i className="fa-solid fa-chart-simple" />
          </button>
        </Link>
        <a
          href="https://pt.wikipedia.org/wiki/Where%27s_Wally%3F"
          target="_blank"
        >
          <button>
            <i className="fa-solid fa-circle-info" />
          </button>
        </a>
        <a href="https://github.com/aalbino221" target="_blank">
          <button>
            <i className="fa-brands fa-github" />
          </button>
        </a>
      </div>
    </DivHeader>
  );
}
