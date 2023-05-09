import styled from 'styled-components';

const GameDiv = styled.div`
  position: relative;
  height: fit-content;
  width: 90vw;
  display: flex;
  margin: 0 auto;

  & > img {
    width: 100%;
  }
`;

const Square = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 2.6vw;
  height: 2.6vw;
  border-radius: 50%;
  border: 0.26vw solid red;
  left: ${({ x }) => `${x - 1.5}%`};
  top: ${({ y }) => `${y - 2.5}%`};
`;

export { Square };

export default GameDiv;
