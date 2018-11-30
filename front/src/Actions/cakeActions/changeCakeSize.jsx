const changeCakeSize = (cakeSize) => {
  console.log('Taille de Cake choisie : ', cakeSize);
  return {
    type: 'CHANGE_CAKE_SIZE',
    payload: cakeSize,
  };
};

export default changeCakeSize;
