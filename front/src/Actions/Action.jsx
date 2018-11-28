// import axios from 'axios';

export const changePrice = price => ({
  type: 'CHANGE_PRICE',
  price,
});

export const changeIndex = num => ({
  type: 'CHANGE_INDEX',
  payload: num,
});
