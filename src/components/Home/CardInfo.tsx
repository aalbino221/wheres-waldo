import beach from '../../assets/background/beach.jpg';
import mall from '../../assets/background/mall.jpg';
import ski from '../../assets/background/ski.jpg';
import waldo from '../../assets/icons/waldo.jpg';
import wenda from '../../assets/icons/wenda.jpg';
import odlaw from '../../assets/icons/odlaw.jpg';
import mage from '../../assets/icons/mage.jpg';

export interface Character {
  name: string;
  found: boolean;
  photo: string;
}

export interface ImgInfo {
  link: string;
  originalX: number;
  originalY: number;
}

export interface CardInfo {
  id: number;
  title: string;
  img: ImgInfo;
  characters: Character[];
}

const cardInfo: CardInfo[] = [
  {
    id: 1,
    title: 'Beach',
    img: {
      link: beach,
      originalX: 3000,
      originalY: 1926,
    },
    characters: [
      { name: 'waldo', found: false, photo: waldo },
      { name: 'wenda', found: false, photo: wenda },
      { name: 'odlaw', found: false, photo: odlaw },
      { name: 'mage', found: false, photo: mage },
    ],
  },
  {
    id: 2,
    title: 'Mall',
    img: {
      link: mall,
      originalX: 2800,
      originalY: 1760,
    },
    characters: [
      { name: 'waldo', found: false, photo: waldo },
      { name: 'wenda', found: false, photo: wenda },
      { name: 'odlaw', found: false, photo: odlaw },
    ],
  },
  {
    id: 3,
    title: 'Ski',
    img: {
      link: ski,
      originalX: 3000,
      originalY: 1902,
    },
    characters: [
      { name: 'waldo', found: false, photo: waldo },
      { name: 'wenda', found: false, photo: wenda },
      { name: 'odlaw', found: false, photo: odlaw },
      { name: 'mage', found: false, photo: mage },
    ],
  },
];

export default cardInfo;
