export default (state = {
  dropdownOpen: false,
  selectedFonts: [],
  wantsCustomMessage: true,
  googleFonts: [],
  customMessage: {
    choice: 'Message personnalisé',
    message: '',
    fontFamily: 'Sedgwick Ave',
    fontColor: 'black',
    backgroundColor: 'white',
    price: 3,
  },
  customMessage_placeHolder: '♥ Joyeux anniversaire chéri! ♥',
  print2D: {
    choice: '2 Dimensions',
    image: {},
    price: 4,
  },
  print3Dimage: {
    choice: '3 Dimensions',
    image: {},
    price: 0,
  },
}, action) => {
  let fontsArray = state.selectedFonts;
  const customMessageYes = state.wantsCustomMessage;
  switch (action.type) {
    case 'ALLOW_MESSAGE': return {
      ...state,
      customMessage: {
        ...state.customMessage,
        message: '',
      },
    };
    case 'REMOVE_CUSTOM_MESSAGE': return {
      ...state,
      customMessage: state.customMessage,
    };
    case 'TOGGLE_FONTS': if (customMessageYes) {
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen,
      };
    }
      return state;
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
    default: return state;
  }
};
