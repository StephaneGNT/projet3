export default function (state = '', action) {
  switch (action.type) {
    case 'SHOW_SEARCHED':
      return action.search;
    default:
      return state;
  }
}
