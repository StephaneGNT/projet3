export default (state = {
<<<<<<< HEAD
  type: ' ', 
  size: 'S',
  occasion: '',
=======
  type: '', // cake, cheesecake, cookie ou macaron
  size: 'S',
  occasion: '', // mariage, anniversaire...
>>>>>>> dev
  ingredients: [
    {
      id: 1,
      name: 'base banane',
      type: 'base',
      size: 'S',
      price: 10,
      dispo: true,
      info: 'some info',
      img: '',
      allerg: 'gluten',
      compatible: ['Glaçage citron', 'Glaçage framboise'],
    },
    {
      id: 2,
      name: 'Glaçage framboise',
      type: 'Glaçage',
      size: 'M',
      price: 5,
      dispo: true,
      info: 'some info',
      img: 'https://via.placeholder.com/150',
      allerg: '',
      compatible: ['Glaçage framboise', 'Glaçage orange'],
    },
  ],
  customization: '', 
  comments: '',
  price: 0,
},
action) => {
  switch (action.type) {
    case 'CHANGE_CAKE_TYPE':
      return { ...state, type: action.payload };
    case 'CHANGE_PRICE':
      return { ...state, price: action.price };
    default:
      return state;
  }
};
