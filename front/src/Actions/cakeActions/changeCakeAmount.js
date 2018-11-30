const changeCakeAmount = (amount) => {
  console.log('Taille de Cake choisie : ', amount);
  return {
    type: 'CHANGE_CAKE_AMOUNT',
    payload: amount,
  };
};

export default changeCakeAmount;
