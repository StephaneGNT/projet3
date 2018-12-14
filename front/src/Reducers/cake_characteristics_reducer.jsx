export default (state = {
  type: '',
  size: 0, // size doit impérativement être définie comme un entier !!
  story: 0, // story doit impérativement être définie comme un entier !!
  quantity: 1, // par défaut (cake, cheesecake), valeur de 1 ;
  // sinon (cookie, macaron), valeur de l'input
  occasion: '',
  ingredients: [],
  customization: {
    customMessage: {
      name: 'Pas de message personnalisé',
      price: 0,
    },
    decoration: {
      name: 'Pas de décoration',
      image: '',
      price: 0,
    },
  }, // aucune, 2D, 3D, message
  comment: '',
  price: 0,
  time: 2,
}, action) => {
  const listIngredients = state.ingredients;
  const indexItem = listIngredients.indexOf(action.item);
  switch (action.type) {
    case 'CHANGE_CAKE_TYPE': return { ...state, size: 0, type: action.payload };
    case 'ADD_INGREDIENT': listIngredients.push(action.item);
      return { ...state, ingredients: listIngredients };
    case 'REMOVE_INGREDIENT': listIngredients.splice(indexItem, 1);
      return { ...state, ingredients: listIngredients };
    case 'CHANGE_CAKE_SIZE': return { ...state, size: action.payload };
    case 'ADD_PIECES': return { ...state, size: state.size + action.payload, story: state.story + 1 };
    case 'REMOVE_PIECES': return { ...state, size: state.size - action.payload, story: state.story - 1 };
    case 'CHANGE_CAKE_AMOUNT': return { ...state, quantity: action.payload };
    case 'CHANGE_CAKE_ETAGE': return { ...state, story: action.payload };
    case 'CHANGE_PRICE': return { ...state, price: action.price };
    case 'ALLOW_MESSAGE':
      return { ...state, customization: { ...state.customization, customMessage: action.item } };
    case 'REMOVE_CUSTOM_MESSAGE':
      return { ...state, customization: { ...state.customization, customMessage: { name: 'Pas de message personnalisé', price: 0 } } };
    case 'UPDATE_CUSTOM_MESSAGE': return {
      ...state,
      customization: {
        ...state.customization,
        customMessage: {
          ...state.customization.customMessage,
          message: action.customMessage,
        },
      },
    };
    case 'CHANGE_BACKGROUND_COLOR':
      return {
        ...state,
        customization: {
          ...state.customization,
          customMessage: {
            ...state.customization.customMessage,
            backgroundColor: action.color.hex,
          },
        },
      };
    case 'CHOOSE_FONT':
      return {
        ...state,
        customization: {
          ...state.customization,
          customMessage: {
            ...state.customization.customMessage,
            font: action.font,
          },
        },
      };
    case 'CHANGE_FONT_COLOR':
      return {
        ...state,
        customization: {
          ...state.customization,
          customMessage: {
            ...state.customization.customMessage,
            fontColor: action.color.hex,
          },
        },
      };
    case 'COMMENT': return {
      ...state,
      comment: action.text,
    };
    case 'SUBMIT_DECORATION_CHOICE':
      return { ...state, customization: { ...state.customization, decoration: action.choice } };
    default: return state;
  }
};
