export default (state = {
  customer: '',
  cake: '',
  order_date: new Date(),
  delivery_date: '',
  customer_status: '',
  admin_status: '',
  customer_comments: '',
},
action) => {
  switch (action.type) {
    case 'setDeliveryDate': return { ...state, delivery_date: action.date };
    default: return state;
  }
};
