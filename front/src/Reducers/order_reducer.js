// import moment from 'moment';

export default (state = {
  customer_id: '',
  cake_id: '',
  order_date: new Date(),
  delivery_date: '',
  customer_status: '',
  admin_status: '',
  customer_comments: '',
  customer_message: '',
},
action) => {
  switch (action.type) {
    case 'SET_DELIVERY_DATE': return { ...state, delivery_date: (action.date) };
    case 'UPDATE_USER_INFO': return { ...state, customer_comments: action.information.comment };
    default: return state;
  }
};
