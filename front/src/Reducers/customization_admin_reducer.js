export default (state = {
  selectedFonts: [],
  googleFonts: [],
  price_customMessage: 0,
  price_2D: 0,
  placeHolder: 'Votre message ici',
  total_price: 0,
}, action) => {
  let fontsArray = state.selectedFonts;
  switch (action.type) {
    case 'UPDATE_FONTS': return {
      ...state,
      googleFonts: action.fonts,
    };
    case 'POPULATE_FONTS':
      fontsArray = [];
      action.fonts.map(eachFont => fontsArray.push(eachFont.name));
      return {
        ...state,
        selectedFonts: fontsArray,
      };
    case 'UPDATE_CUSTOMIZATION_PRICE':
      return {
        ...state,
        total_price: state.total_price + action.data,
      };
    case 'SEND_CUSTOM_PRICES':
      return {
        ...state,
        price_customMessage: action.prices[0].price,
        price_2D: action.prices[1].price,
      };
    default: return state;
  }
};
