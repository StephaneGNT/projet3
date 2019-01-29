export default (state = { alert: false, message: '' }, action) => {
  if (action.type === 'ALERT') return { ...state, alert: !state.alert, message: action.message };
  return state;
};
