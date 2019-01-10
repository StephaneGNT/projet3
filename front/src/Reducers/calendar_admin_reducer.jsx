import { checkArrayIndex } from '../Containers/Admin/CheckDateMatch';

export default (state = {
  orangeDate: [],
  redDate: [],
}, action) => {
  const dateArray = state[action.color];
  switch (action.type) {
    case 'INSERT_DATE':
      dateArray.push(action.date);
      return { ...state, [action.color]: dateArray };
    case 'REMOVE_DATE':
      dateArray.splice(checkArrayIndex(dateArray, action.date), 1);
      return { ...state, [action.color]: dateArray };
    default: return state;
  }
};
