export default (state = {
  giftcard: '',
  customMessage: {
    choice: '',
    message: '',
    fontFamily: '',
    fontColor: '',
    backgroundColor: '',
    price: 0,
  },
  decoration: {
    choice: '',
    image: {},
    price: 0,
  },
}, action) => {
  const modifyMessage = item => ({
    ...state,
    customMessage: {
      ...state.customMessage,
      [item]: action[item],
    },
  });
  switch (action.type) {
    case 'ALLOW_MESSAGE':
      return { ...state, customMessage: action.item };
    case 'REMOVE_CUSTOM_MESSAGE':
      return { ...state, customMessage: { ...state.customMessage, choice: '', price: 0 } };
    case 'UPDATE_CUSTOM_MESSAGE': return modifyMessage('message');
    case 'CHOOSE_FONT_FAMILY': return modifyMessage('fontFamily');
    case 'CHANGE_FONT_COLOR': return modifyMessage('fontColor');
    case 'CHANGE_BACKGROUND_COLOR': return modifyMessage('backgroundColor');
    case 'SUBMIT_DECORATION_CHOICE': return { ...state, decoration: action.choice };
    case 'UPDATE_USER_INFO': return { ...state, giftcard: action.information.giftcard };
    default: return state;
  }
};
