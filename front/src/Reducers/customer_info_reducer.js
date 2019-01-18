export default (state = {
  firstname: '',
  lastname: '',
  birthdate: '',
  email: '',
  telephone: '',
},
action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO': return {
      firstname: action.information.user.firstname,
      lastname: action.information.user.lastname,
      birthdate: action.information.user.birthday,
      email: action.information.user.email,
      telephone: action.information.user.phone,
    };
    default: return state;
  }
};
