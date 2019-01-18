export default function (state = '', action) {
  switch (action.type) {
    case 'ADD_INGREDIENT_IN_DATABASE':
      return action.payload;
    default:
      return state;
  }
}