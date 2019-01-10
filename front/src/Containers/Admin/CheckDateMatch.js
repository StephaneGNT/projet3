import moment from 'moment';

export const checkDateMatch = (array, date) => {
  let match = false;
  for (let i = 0; i < array.length; i += 1) {
    if (moment(array[i]).isSame(date)) {
      match = true;
      break;
    }
  }
  return match;
};

export const checkArrayIndex = (array, date) => {
  let duplicate = '';
  for (let i = 0; i < array.length; i += 1) {
    if (moment(array[i]).isSame(date)) {
      duplicate = i;
      break;
    }
  }
  return duplicate;
};
