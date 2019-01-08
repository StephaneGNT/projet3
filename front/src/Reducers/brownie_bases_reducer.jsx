import amandes from '../Assets/Images/topping_amandes.png';
import cacahuetes from '../Assets/Images/topping_cacahuetes.png';

const initialState = [
  {
    id: 1,
    name: 'Amandes caramélisées',
    type: 'Base brownie',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: amandes,
    allerg: '',
    compatible: [],
  },
  {
    id: 2,
    name: 'Cacahuètes',
    type: 'Base brownie',
    size: 'S',
    price: 4,
    dispo: true,
    info: 'some info',
    img: cacahuetes,
    allerg: '',
    compatible: [],
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BROWNIE_BASES':
      return action.payload;
    default:
      return state;
  }
};
