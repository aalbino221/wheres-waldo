import beach from '../../assets/background/beach.jpg';
import GameDiv from './GameStyle';
import SaveScore from './SaveScore';

export default function Game() {
  return (
    <GameDiv>
      <img src={beach} alt="" />
      <SaveScore />
    </GameDiv>
  );
}
