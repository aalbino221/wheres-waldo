import styled from 'styled-components';

const DivHeader = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  padding: 0.5rem 4rem;
  border-bottom: 2px solid #00000022;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;

  & > div:nth-child(1) {
    justify-self: start;
  }

  & > div:nth-child(3) {
    justify-self: end;
  }

  //Left element
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & p {
      word-spacing: 3px;
    }

    & span {
      font-size: 2.2rem;
      font-weight: 700;
      color: #0057ff;
    }

    & span + span {
      color: red;
    }
  }

  & > div > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  //Div with img
  & > div:nth-child(1) > a > div {
    height: 80px;
    width: 96px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  // Right
  & > div + div {
    gap: 2rem;
  }

  & > div + div button {
    color: #0057ff;
    font-size: 1.8rem;
  }

  & button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default DivHeader;
