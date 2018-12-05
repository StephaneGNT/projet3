const setDeliveryDate = (date) => {
  console.log(date);  
  return {
    type: 'SET_DELIVERY_DATE',
    date,
  };
};

export default setDeliveryDate;
