export default (state = {
  deco1: '',
  deco2: '',
  photo1: '',
  photo2: '',
  msgContent: '',
  msgColor: '',
  msgBgColor: '',
  msgFontId: '',
}, action) => {
  if (action.type === 'UPDATE_CUSTOM_SUMMARY') return action.data;
  return state;
};
