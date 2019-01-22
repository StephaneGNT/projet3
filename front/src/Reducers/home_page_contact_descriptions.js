export default (state = {
  homePage: '',
  aboutUs: '',
},
action) => {
  switch (action.type) {
    case 'CHANGE_DESCRIPTIONS': return action.descriptions;
    default: return state;
  }
};
