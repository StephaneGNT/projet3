export default (state = [{
  id: '',
  type: '',
  size: '',
  quantity: '',
  story: '',
  occasion: '',
  price: '',
  customWishes: '',
  ingredients: [],
}],
action) => {
  switch (action.type) {
    case 'SAVE_CAKES': return action.cakeList;
    default: return state;
  }
};
