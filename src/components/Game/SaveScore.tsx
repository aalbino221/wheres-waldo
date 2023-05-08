import styled from 'styled-components';
import { useContext, useRef } from 'react';
import { StateContext } from '../../App';
import formatTime from '../reusuable/formatTimeFunction';
import writeScore from '../../firebase/firestore/writeScore';
import StyledLink from '../reusuable/Link';

const Link = StyledLink;

const Dialog = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #00000071;
  justify-content: center;
  align-items: center;
  & p {
    margin: 0;
    font-size: 1.3rem;
  }
  & p + p {
    color: #000000ae;
  }

  & > dialog {
    width: 20%;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 1rem;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
  }
  & input {
    border: none;
    border-bottom: 1px solid #00000050;
    padding: 0.5rem;
    padding: 0.5rem 0;
    font-size: 1rem;
    color: #000000c3;
  }
  & input:focus {
    outline: none;
  }
  & div {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  & button {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    background-color: #256dfd;
    color: white;
    width: 35%;
    min-width: fit-content;
  }
  & a:nth-child(2) > button {
    background-color: #fd2b2b;
  }
`;

export default function SaveScore() {
  const { timer } = useContext(StateContext)[1];
  const { selectedGame } = useContext(StateContext)[0];
  const { setSelectedLeaderboard } = useContext(StateContext)[2];
  const inputRef = useRef<HTMLInputElement>(null);

  const writeTable = () => {
    const time = timer;
    const { id } = selectedGame;
    const name =
      inputRef.current && inputRef.current.value != ''
        ? inputRef.current.value
        : 'Anonymous';
    writeScore(id, name, time);
    setSelectedLeaderboard(id);
  };

  return (
    <Dialog>
      <dialog>
        <p>You finished in {formatTime(timer)} !</p>
        <p>Submit your name to the leaderboard</p>
        <input type="text" placeholder="Your Name" ref={inputRef} />
        <div>
          <Link to="/">
            <button type="button">RETURN HOME</button>
          </Link>
          <Link to="/leaderboard">
            <button type="submit" onClick={writeTable}>
              SUBMIT
            </button>
          </Link>
        </div>
      </dialog>
    </Dialog>
  );
}
