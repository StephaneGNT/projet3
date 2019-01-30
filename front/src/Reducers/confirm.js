export default (state = { confirm: false, message: '', choice: '' }, action) => {
  if (action.type === 'CONFIRM') return { ...state, confirm: !state.confirm, message: action.message, choice: action.choice };
  return state;
};
