export default (state = [{
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthday: '',
}],
action) => {
  switch (action.type) {
    case 'SAVE_CUSTOMERS': return action.customerList;
    default: return state;
  }
};
