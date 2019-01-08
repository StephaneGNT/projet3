export default function (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return action.visible;
    default:
      return state;
  }
}
