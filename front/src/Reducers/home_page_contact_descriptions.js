export default (state = {
  homePage: '',
  contact: '',
},
action) => {
  console.log("action in homePageReducer", action);
  switch (action.type) {
    case 'CHANGE_DESCRIPTIONS': return {
      homePage: action.descriptions.data[0].homePage,
      contact: action.descriptions.data[0].contact,
    };
    default: return state;
  }
};
