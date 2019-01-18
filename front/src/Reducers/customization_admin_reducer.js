export default (state = {
  selectedFonts: [],
  googleFonts: [],
  price_customMessage: 3,
  price_2D: 4,
  placeHolder: 'Joyeux anniversaire Nicolas',
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
    default: return state;
  }
};
