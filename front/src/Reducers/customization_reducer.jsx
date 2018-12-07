export default (state = {
  font: 'Sedgwick Ave',
  dropdownOpen: false,
  selectedFonts: ['Bungee', 'Charmonman'],
  googleFonts: [],
  decorationChoice: null,
  wantsCustomMessage: false,
  customMessage: '♥ Joyeux anniversaire chéri! ♥',
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
      customMessage: !customMessageYes ? '' : '♥ Joyeux anniversaire chéri! ♥',
      fontColor: 'black',
      bgColor: '',
    };
    case 'UPDATE_CUSTOM_MESSAGE': return {
      ...state,
      customMessage: action.customMessage,
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
      console.log("hello")
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
