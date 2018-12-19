export default (state = {
  dropdownOpen: false,
  selectedFonts: ['Sedgwick Ave', 'Bungee', 'Charmonman', 'Kaushan Script', 'Lobster Two'],
  wantsCustomMessage: false,
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
  const customMessageYes = state.wantsCustomMessage;
  switch (action.type) {
    case 'ALLOW_MESSAGE': return {
      ...state,
      wantsCustomMessage: !customMessageYes,
      customMessage: {
        ...state.customMessage,
        message: '',
      },
    };
    case 'REMOVE_CUSTOM_MESSAGE': return {
      ...state,
      wantsCustomMessage: !customMessageYes,
      customMessage: state.customMessage,
    };
    case 'TOGGLE_FONTS': if (customMessageYes) {
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen,
      };
    }
      return state;
    default: return state;
  }
};
