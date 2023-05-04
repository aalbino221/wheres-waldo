import styled from 'styled-components';
import waldo from '../../assets/icons/waldo.jpg';

const CurrentGameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > div:nth-child(1) {
    height: 80px;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  & > div > img {
    height: 50%;
    object-fit: cover;
    object-position: center;
  }
  & > h2 {
    font-weight: 500;
  }
`;

export default function CurrentGame() {
  return (
    <CurrentGameDiv>
      <div>
        <img src={waldo} alt="" />
        <img src={waldo} alt="" />
        <img src={waldo} alt="" />
        <img src={waldo} alt="" />
      </div>
      <h2>00:00:00</h2>
    </CurrentGameDiv>
  );
}
