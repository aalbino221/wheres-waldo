import styled from 'styled-components';
const Table = styled.table`
  width: 80%;
  border: 2px solid #00000222;
  border-spacing: 0px;
  border-radius: 4px;
  & thead {
    background-color: #a9a6a678;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }
  & th,
  & td {
    padding: 0.4rem 1rem;
    text-align: start;
  }
  & tr > *:nth-child(1) {
    width: 70%;
  }
  & td {
    font-weight: 600;
  }
`;

export default Table;
