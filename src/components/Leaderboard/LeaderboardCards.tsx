import CardDiv from '../Home/GameCardStyle';
import styled from 'styled-components';
import beach from '../../assets/background/beach.jpg';

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

export default function LeaderboardCards() {
  return (
    <Card>
      <div>
        <img src={beach} alt="" />
      </div>
      <div className="active">
        <h3>Beach</h3>
      </div>
    </Card>
  );
}
