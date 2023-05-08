import styled from 'styled-components';

const CardDiv = styled.div`
  height: 370px;
  width: max(300px, 27vw);
  border: 2px solid #0000001a;

  //FIRST DIV
  & > div {
    height: 81%;
    overflow: hidden;
  }

  //FIRST DIV-IMG
  & > div > img {
    height: 120%;
    object-fit: cover;
    object-position: center;
  }

  && > h3 {
    font-weight: 500;
  }

  //SECOND DIV
  & > div + div {
    display: flex;
    height: 19%;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem;
  }

  & > div + div > div {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  & > div + div > div > img {
    height: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

export default CardDiv;
