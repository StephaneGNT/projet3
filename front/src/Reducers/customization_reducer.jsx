export default (state = {
  font: 'Sedgwick Ave',
  dropdownOpen: false,
  selectedFonts: ['Bungee', 'Charmonman'],
  googleFonts: [],
  decorationChoice: null,
  wantsCustomMessage: false,
  customMessage: {
    name: 'Custom Message',
    message: '♥ Joyeux anniversaire chéri! ♥',
    price: 3,
  },
  print2D: {
    name: '2 Dimension',
    image: '',
    price: 4,
  },
  print3Dimage: '',
  textDisabled: true,
  bgColor: '',
  fontColor: 'black',
}, action) => {
  const customMessageYes = state.wantsCustomMessage;
  const customFonts = state.selectedFonts;
  switch (action.type) {
    case 'UPDATE_FONTS': return {
      ...state,
      googleFonts: action.fonts,
    };
    case 'ALLOW_MESSAGE': return {
      ...state,
      wantsCustomMessage: !customMessageYes,
      textDisabled: !state.textDisabled,
      customMessage: {
        ...state.customMessage,
        message: '',
      },
    };
    case 'REMOVE_CUSTOM_MESSAGE': return {
      ...state,
      wantsCustomMessage: !customMessageYes,
      textDisabled: !state.textDisabled,
      customMessage: {
        ...state.customMessage,
        message: '♥ Joyeux anniversaire chéri! ♥',
      },
      fontColor: 'black',
      bgColor: '',
    };
    case 'UPDATE_CUSTOM_MESSAGE': return {
      ...state,
      customMessage: {
        ...state.customMessage,
        message: action.customMessage,
      },
    };
    case 'TOGGLE_FONTS': if (customMessageYes) {
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen,
      };
    }
      return state;
    case 'CHOOSE_DECORATION_TYPE': return {
      ...state,
      decorationChoice: action.decorationChoice,
    };
    case 'CHOOSE_FONT': return {
      ...state,
      font: action.font,
    };
    case 'ADD_FONT':
      customFonts.push(action.font);
      return {
        ...state,
        selectedFonts: customFonts,
      };
    case 'CHANGE_BACKGROUND_COLOR': if (customMessageYes) {
      return {
        ...state,
        bgColor: action.color.hex,
      };
    }
      return state;
    case 'CHANGE_FONT_COLOR': if (customMessageYes) {
      return {
        ...state,
        fontColor: action.color.hex,
      };
    }
      return state;
    default: return state;
  }
};
