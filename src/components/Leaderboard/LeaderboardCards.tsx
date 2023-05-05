import CardDiv from '../Home/GameCardStyle';
import styled from 'styled-components';
import beach from '../../assets/background/beach.jpg';
import { useContext } from 'react';
import { StateContext } from '../../App';

const Card = styled(CardDiv)`
  height: 295px;
  width: 354px;
  & h3 {
    font-size: 1.2rem;
  }

  & .active {
    color: white;
    background-color: #fc3939;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

interface CardInfo {
  id: number;
  title: string;
  img: string;
  characters: string[];
}

export default function LeaderboardCards({ cardInfo }: { cardInfo: CardInfo }) {
  const { id, title, img } = cardInfo;
  const { setSelectedLeaderboard } = useContext(StateContext)[2];
  const changeLeaderboard = () => {
    setSelectedLeaderboard(id);
  };

  return (
    <Button onClick={changeLeaderboard}>
      <Card>
        <div>
          <img src={img} alt="" />
        </div>
        <div className="active">
          <h3>{title}</h3>
        </div>
      </Card>
    </Button>
  );
}
