export default function (state = '', action) {
  switch (action.type) {
    case 'SET_INDEX':
      return action.index;
    default:
      return state;
  }
}
