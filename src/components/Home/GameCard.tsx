import { useContext } from 'react';
import CardDiv from './GameCardStyle';
import StyledLink from '../reusuable/Link';
import styled from 'styled-components';
import { StateContext } from '../../App';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Link = StyledLink;

import { CardInfo } from './CardInfo';

export default function GameCard({ cardInfo }: { cardInfo: CardInfo }) {
  const { id, img, title, characters } = cardInfo;
  const { setSelectedGame } = useContext(StateContext)[0];

  const selectGame = () => {
    setSelectedGame({ id, img, title, characters });
  };

  return (
    <Link to="./game" style={{ color: 'black' }}>
      <Button
        onClick={() => {
          selectGame();
        }}
      >
        <CardDiv>
          <div>
            <img src={img.link} alt="" />
          </div>
          <div>
            <h3>{title}</h3>
            <div>
              {characters.map((character, index) => (
                <img key={index} src={character.photo} />
              ))}
            </div>
          </div>
        </CardDiv>
      </Button>
    </Link>
  );
}
