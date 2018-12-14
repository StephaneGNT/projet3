export default (state = {
  dropdownOpen: false,
  selectedFonts: ['Bungee', 'Charmonman'],
  wantsCustomMessage: false,
  customMessage: {
    name: 'Message personnalisé',
    message: '',
    font: 'Sedgwick Ave',
    fontColor: 'black',
    backgroundColor: 'white',
    price: 3,
  },
  customMessage_placeHolder: '♥ Joyeux anniversaire chéri! ♥',
  print2D: {
    name: '2 Dimensions',
    image: '',
    price: 4,
  },
  print3Dimage: {
    name: '3 Dimensions',
    image: '',
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
