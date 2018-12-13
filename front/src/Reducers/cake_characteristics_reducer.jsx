export default (state = {
  type: '',
  size: 0, // size doit impérativement être définie comme un entier !!
  story: 0, // story doit impérativement être définie comme un entier !!
  quantity: 1, // par défaut (cake, cheesecake), valeur de 1 ; sinon (cookie, macaron), valeur de l'input
  occasion: '',
  ingredients: [
  ],
  customization: 'aucune', // aucune, 2D, 3D, message
  comments: '',
  price: 0,
  time: 2,
},
action) => {
  const listIngredients = state.ingredients;
  const indexItem = listIngredients.indexOf(action.item);
  console.log(state,action)
  switch (action.type) {
    case 'ADD_INGREDIENT': listIngredients.push(action.item);
      return { ...state, ingredients: listIngredients };
    case 'REMOVE_INGREDIENT': listIngredients.splice(indexItem, 1);
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
