import styled from 'styled-components';

const Dialog = styled.div`
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #00000071;
`;

export default function SaveScore() {
  return (
    <Dialog>
      <dialog>
        <h2>Título do Modal</h2>
        <p>Conteúdo do Modal</p>
      </dialog>
    </Dialog>
  );
}
