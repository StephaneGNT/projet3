export default function (state = '', action) {
  switch (action.type) {
    case 'REGISTER_TOKEN':
      return action.token;
      // return state;
    default:
      return state;
  }
}
