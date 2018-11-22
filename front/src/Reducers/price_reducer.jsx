const priceReducer = (price = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_PRICE':
      return price + action.price;
    case 'SUBSTRACT_FROM_PRICE':
      return price - action.price;
    default:
      return price;
  }
};
export default priceReducer;
