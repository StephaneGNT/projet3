import amandes from '../Assets/Images/topping_amandes.png';
import cacahuetes from '../Assets/Images/topping_cacahuetes.png';

const initialState = [
  {
    id: 1,
    name: 'Chocolat amandes',
    type: 'Base cookie',
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
    type: 'Base cookie',
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
    case 'GET_COOKIE_BASES':
      return action.payload;
    default:
      return state;
  }
};
