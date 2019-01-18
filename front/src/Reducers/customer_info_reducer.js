export default (state = {
  firstName: '',
  lastName: '',
  birthdate: '',
  email: '',
  telephone: '',
},
action) => {
  if (action.type === 'UPDATE_USER_INFO') return action.information.user;
  return state;
};
