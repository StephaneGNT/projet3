import vanille from '../Assets/Images/macaron_orange.png';
import chocolat from '../Assets/Images/macaron_chocolat.png';
import fruitsRouges from '../Assets/Images/macaron_fruitsrouges.png';
import citron from '../Assets/Images/macaron_citron.png';
import caramel from '../Assets/Images/macaron_caramel.png';

const initialState = [
  {
    id: 1,
    name: 'Parfum vanille',
    type: 'Macaron',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: vanille,
    allerg: '',
    compatible: ['Rouge', 'Vert', 'Bleu'],
  },
  {
    id: 2,
    name: 'Parfum chocolat',
    type: 'Macaron',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: chocolat,
    allerg: '',
    compatible: ['Rouge', 'Vert', 'Bleu'],
  },
  {
    id: 3,
    name: 'Parfum fruits rouges',
    type: 'Macaron',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: fruitsRouges,
    allerg: '',
    compatible: ['Rouge', 'Vert', 'Bleu'],
  },
  {
    id: 4,
    name: 'Parfum citron',
    type: 'Macaron',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: citron,
    allerg: '',
    compatible: ['Rouge', 'Vert', 'Bleu'],
  },
  {
    id: 5,
    name: 'Parfum caramel',
    type: 'Macaron',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: caramel,
    allerg: '',
    compatible: ['Rouge', 'Vert', 'Bleu'],
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MACARON_FLAVORS':
      return action.payload;
    default:
      return state;
  }
};
