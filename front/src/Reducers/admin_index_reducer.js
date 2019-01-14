export default function (state = 1, action) {
  switch (action.type) {
    case 'CHANGE_ADMIN_INDEX':
      return action.payload;
    default:
      return state;
  }
}
