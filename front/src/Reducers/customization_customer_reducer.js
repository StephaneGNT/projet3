export default (state = {
  deco1: '',
  deco2: '',
  photo1: '',
  photo2: '',
  description3D: '',
  msgContent: '',
  msgColor: '',
  msgBgColor: '',
  msgFont: '',
}, action) => {
  if (action.type === 'UPDATE_CUSTOM_SUMMARY') return action.data;
  return state;
};
