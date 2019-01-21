export default (state = [{
  id: '',
  cakeId: '',
  deliveryDate: '',
  orderDate: '',
  customerId: '',
  customerStatus: '',
  adminStatus: '',
  customerComment: '',
  customerMessage: '',
}],
action) => {
  switch (action.type) {
    case 'SAVE_ORDERS': return action.orderList;
    // case 'CHANGE_ADMIN_STATUS': return { ...state, admin_status: action.status }
    default: return state;
  }
};
