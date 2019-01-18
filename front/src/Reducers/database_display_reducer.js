export default function (state = {alpha:'', beta:''}, action) {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, alpha: action.category};
    case 'MOD_SET_CATEGORY':
      return { ...state, beta: action.category};
    default:
      return state;
  }
}
