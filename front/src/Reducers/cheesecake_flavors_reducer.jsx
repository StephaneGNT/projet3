import speculoos from '../Assets/Images/speculoos.jpg';
import caramel from '../Assets/Images/caramel.jpg';

const initialState = [
  {
    id: 3,
    name: 'Parfum speculoos',
    type: 'Parfum',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: speculoos,
    allerg: '',
    compatible: ['Cream cheese', 'Sucre glace', 'Amandes caramélisées', 'Noix caramélisées', 'Noisettes caramélisées', 'Crumble'],
  },
  {
    id: 4,
    name: 'Parfum caramel',
    type: 'Parfum',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: caramel,
    allerg: '',
    compatible: ['Cream cheese', 'Sucre glace', 'Amandes caramélisées', 'Noix caramélisées', 'Noisettes caramélisées', 'Crumble'],
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHEESECAKE_FLAVORS':
      return action.payload;
    default:
      return state;
  }
};
