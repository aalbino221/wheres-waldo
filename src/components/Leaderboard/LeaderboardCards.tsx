import CardDiv from '../Home/GameCardStyle';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../App';
import { CardInfo } from '../Home/CardInfo';

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

export default function LeaderboardCards({ cardInfo }: { cardInfo: CardInfo }) {
  const [active, setActive] = useState(false);
  const { id, title, img } = cardInfo;
  const { selectedLeaderboard, setSelectedLeaderboard } =
    useContext(StateContext)[2];

  const changeActive = () => {
    selectedLeaderboard === id ? setActive(true) : setActive(false);
  };

  const changeLeaderboard = () => {
    setSelectedLeaderboard(id);
  };

  useEffect(() => {
    changeActive();
  });

  return (
    <Button onClick={changeLeaderboard}>
      <Card>
        <div>
          <img src={img.link} alt="" />
        </div>
        <div className={active ? 'active' : ''}>
          <h3>{title}</h3>
        </div>
      </Card>
    </Button>
  );
}
