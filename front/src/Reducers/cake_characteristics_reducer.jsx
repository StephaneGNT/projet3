export default (state = {
  type: 'cookie', // cake, cheesecake, cookie ou macaron
  size: 'S',
  occasion: '', // mariage, anniversaire...
  ingredients: [],
  customization: '', // aucune, message, photo 2D, photo 3D
  comments: '',
  price: 0,
},
action) => {
  switch (action.type) {
    case 'CHANGE_PRICE':
      return { ...state, price: action.price };
    default:
      return state;
  }
};
