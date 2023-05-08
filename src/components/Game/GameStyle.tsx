import styled from 'styled-components';

const GameDiv = styled.div`
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid red;
  left: ${({ x }) => `${x - 25}px`};
  top: ${({ y }) => `${y - 25}px`};
`;

export { Square };

export default GameDiv;
