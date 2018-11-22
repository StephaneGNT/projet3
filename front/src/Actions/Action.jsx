// import axios from 'axios';

export const increasePrice = price => ({
  type: 'ADD_TO_PRICE',
  price,
});

export const decreasePrice = price => ({
  type: 'SUBSTRACT_FROM_PRICE',
  price,
});
