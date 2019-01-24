import moment from 'moment';

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
    case 'SET_DELIVERY_DATE': return { ...state, delivery_date: moment(action.date) };
    default: return state;
  }
};
