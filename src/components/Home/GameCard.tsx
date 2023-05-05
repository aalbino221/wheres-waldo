import { useContext } from 'react';
import waldo from '../../assets/icons/waldo.jpg';
import wenda from '../../assets/icons/wenda.jpg';
import odlaw from '../../assets/icons/odlaw.jpg';
import mage from '../../assets/icons/mage.jpg';
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

interface CardInfo {
  id: number;
  title: string;
  img: string;
  characters: string[];
}

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
            <img src={img} alt="" />
          </div>
          <div>
            <h3>{title}</h3>
            <div>
              {characters.map((item, index) => {
                if (item == 'waldo') return <img src={waldo} key={index} />;
                if (item == 'wenda') return <img src={wenda} key={index} />;
                if (item == 'odlaw') return <img src={odlaw} key={index} />;
                if (item == 'mage') return <img src={mage} key={index} />;
              })}
            </div>
          </div>
        </CardDiv>
      </Button>
    </Link>
  );
}
