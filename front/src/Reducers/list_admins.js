export default (state = [{
  id: '',
  name: '',
  password: '',
}],
action) => {
  switch (action.type) {
    case 'SAVE_ADMINS': return action.adminList;
    default: return state;
  }
};