const setDeliveryDate = (date) => { 
  console.log("date action")
  return {
    type: 'SET_DELIVERY_DATE',
    date,
  };
};

export default setDeliveryDate;
