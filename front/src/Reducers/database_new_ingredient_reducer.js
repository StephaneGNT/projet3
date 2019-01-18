export default function (state = {new: false, modify: false}, action) {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return { ...state, new: action.visible };
    case 'TOGGLE_MODIFY_FORM':
      return { ...state, modify: action.show };
    default:
      return state;
  }
}
