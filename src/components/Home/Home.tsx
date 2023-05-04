import styled from 'styled-components';
import GameCard from './GameCard';
import beach from '../../assets/background/beach.jpg';

const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const info = {
  id: 1,
  title: 'Beach',
  img: beach,
  characters: ['waldo', 'wenda', 'odlaw', 'mage'],
};

export default function Home() {
  return (
    <HomeDiv>
      <GameCard cardInfo={info} />
    </HomeDiv>
  );
}
