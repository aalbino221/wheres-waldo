import waldo from '../../assets/icons/waldo.jpg';
import wenda from '../../assets/icons/wenda.jpg';
import odlaw from '../../assets/icons/odlaw.jpg';
import mage from '../../assets/icons/mage.jpg';
import CardDiv from './GameCardStyle';
import StyledLink from '../reusuable/Link';

const Link = StyledLink;

interface CardInfo {
  id: number;
  title: string;
  img: string;
  characters: string[];
}

export default function GameCard({ cardInfo }: { cardInfo: CardInfo }) {
  const { img, title, characters } = cardInfo;

  return (
    <Link to="./game" style={{ color: 'black' }}>
      <CardDiv>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
          <div>
            {characters.map((item) => {
              if (item == 'waldo') return <img src={waldo} />;
              if (item == 'wenda') return <img src={wenda} />;
              if (item == 'odlaw') return <img src={odlaw} />;
              if (item == 'mage') return <img src={mage} />;
            })}
          </div>
        </div>
      </CardDiv>
    </Link>
  );
}
