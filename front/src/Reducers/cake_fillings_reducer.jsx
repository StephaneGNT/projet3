import fillingCreamCheese from '../Assets/Images/filling_creamcheese.png';
import ganacheChocolat from '../Assets/Images/filling_chocolat.png';
import ganacheCaramel from '../Assets/Images/filling_caramel.png';
import fillingFraise from '../Assets/Images/filling_fraise.png';
import fillingCitron from '../Assets/Images/filling_citron.png';

const initialState = [
  {
    id: 1,
    name: 'Cream cheese',
    type: 'Garniture',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: fillingCreamCheese,
    allerg: '',
    compatible: ['Cream cheese', 'Sucre glace', 'Amandes caramélisées', 'Noix caramélisées', 'Noisettes caramélisées', 'Crumble'],
    isCompatibe: false,
  },
  {
    id: 2,
    name: 'Crème chocolat',
    type: 'Garniture',
    size: 'M',
    price: 5,
    dispo: true,
    info: 'some info',
    img: ganacheChocolat,
    allerg: '',
    compatible: ['Cream cheese', 'Ganache chocolat', 'Ganache caramel', 'Dentelles chocolat', 'Noix', 'Amandes', 'Fraise'],
    isCompatibe: false,
  },
  {
    id: 3,
    name: 'Ganache caramel',
    type: 'Garniture',
    size: 'XL',
    price: 6,
    dispo: true,
    info: 'some info',
    img: ganacheCaramel,
    allerg: '',
    compatible: ['Cream cheese', 'Ganache chocolat', 'Ganache caramel', 'Dentelles chocolat', 'Noix', 'Amandes', 'Fraise'],
    isCompatibe: false,
  },
  {
    id: 4,
    name: 'Fourrage fraise',
    type: 'Garniture',
    size: 'S',
    price: 2,
    dispo: true,
    info: 'some info',
    img: fillingFraise,
    allerg: 'gluten',
    compatible: [],
    // fullDescription: getDescription(this),
    isCompatibe: false,
  },
  {
    id: 5,
    name: 'Fourrage citron',
    type: 'Garniture',
    size: 'S',
    price: 2,
    dispo: true,
    info: 'some info',
    img: fillingCitron,
    allerg: 'gluten',
    compatible: 'tout',
    isCompatibe: false,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FILLINGS':
      return action.payload;
    default:
      return state;
  }
};
