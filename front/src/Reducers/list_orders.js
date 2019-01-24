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
    // case 'CHANGE_ADMIN_STATUS': {
    //   const orders = state;
    //   orders[action.index].adminStatus = action.status;
    //   return { orders }}
    default: return state;
  }
};
