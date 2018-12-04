export default (state = {
  type: ' ',
  size: 0, // size doit impérativement être définie comme un entier !!
  story: 0, // story doit impérativement être définie comme un entier !!
  quantity: '1',
  occasion: '',
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
      compatible: ['base banane', 'Glaçage citron', 'Glaçage framboise'],
    },
    {
      id: 2,
      name: '',
      type: 'Glaçage',
      size: 'M',
      price: 5,
      dispo: true,
      info: 'some info',
      img: '',
      allerg: '',
      compatible: ['Glaçage framboise', 'Glaçage orange'],
    },
  ],
  customization: '', // aucune, 2D, 3D, message
  comments: '',
  price: 0,
},
action) => {
  const listIngredients = state.ingredients;
  switch (action.type) {
    case 'ADD_INGREDIENT': listIngredients.push(action.item);
      return { ...state, ingredients: listIngredients };
    case 'CHANGE_CAKE_SIZE': return { ...state, size: action.payload };
    case 'ADD_PIECES': return { ...state, size: state.size + action.payload, story: state.story + 1 };
    case 'REMOVE_PIECES': return { ...state, size: state.size - action.payload, story: state.story - 1 };
    case 'CHANGE_CAKE_AMOUNT': return { ...state, quantity: action.payload };
    case 'CHANGE_CAKE_TYPE': return { ...state, type: action.payload };
    case 'CHANGE_CAKE_ETAGE': return { ...state, story: action.payload };
    case 'CHANGE_PRICE': return { ...state, price: action.price };
    default: return state;
  }
};
