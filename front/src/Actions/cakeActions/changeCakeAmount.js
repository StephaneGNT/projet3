const changeCakeAmount = (amount) => {
  return {
    type: 'CHANGE_CAKE_AMOUNT',
    payload: amount,
  };
};

export default changeCakeAmount;
