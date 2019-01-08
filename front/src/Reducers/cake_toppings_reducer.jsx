import toppingNoix from '../Assets/Images/topping_noix.png';
import toppingCrumble from '../Assets/Images/topping_crumble.png';
import toppingFraise from '../Assets/Images/topping_fraise2.png';
import toppingAmande from '../Assets/Images/topping_amandes.png';
import toppingFramboise from '../Assets/Images/topping_framboise2.png';
import toppingNoisettes from '../Assets/Images/topping_noisettes.png';
import toppingBillechocolat from '../Assets/Images/topping_billechocolat.png';

const initialState = [
  {
    id: 1,
    name: 'Noisettes caramélisées',
    type: 'Toppings',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: toppingNoisettes,
    allerg: '',
    compatible: 'tout',
    portion: '250g',
  },
  {
    id: 2,
    name: 'Dentelles chocolat',
    type: 'Toppings',
    size: 'M',
    price: 5,
    dispo: true,
    info: 'some info',
    img: toppingBillechocolat,
    allerg: '',
    compatible: 'tout',
    portion: '350g',
  },
  {
    id: 3,
    name: 'Noix caramélisées',
    type: 'Toppings',
    size: 'XL',
    price: 6,
    dispo: true,
    info: 'some info',
    img: toppingNoix,
    allerg: '',
    compatible: 'tout',
    portion: '400g',
  },
  {
    id: 4,
    name: 'Crumble',
    type: 'Toppings',
    size: 'S',
    price: 2,
    dispo: true,
    info: 'some info',
    img: toppingCrumble,
    allerg: 'gluten',
    compatible: 'tout',
    portion: '100g',
  },
  {
    id: 4,
    name: 'Fraise',
    type: 'Toppings',
    size: 'M',
    price: 3,
    dispo: true,
    info: 'some info',
    img: toppingFraise,
    allerg: 'gluten',
    compatible: 'tout',
    portion: '200g',
  },
  {
    id: 6,
    name: 'Amandes caramélisées',
    type: 'Toppings',
    size: 'XL',
    price: 4,
    dispo: true,
    info: 'some info',
    img: toppingAmande,
    allerg: 'gluten',
    compatible: 'tout',
    portion: '300g',
  },
  {
    id: 7,
    name: 'Framboises',
    type: 'Toppings',
    size: 'S',
    price: 2,
    dispo: true,
    info: 'some info',
    img: toppingFramboise,
    allerg: 'gluten',
    compatible: 'tout',
    portion: '250g',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOPPINGS':
      return action.payload;
    default:
      return state;
  }
};
