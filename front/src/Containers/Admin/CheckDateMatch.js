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

export const getDateID = (array, date) => {
  const arrayDate = array.map(d => d.date);
  const arrayID = array.map(i => i.id);
  let identification = '';
  for (let i = 0; i < array.length; i += 1) {
    if (moment(arrayDate[i]).isSame(date)) {
      identification = arrayID[i];
      break;
    }
  }
  return identification;
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
