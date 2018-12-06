const changeCakeSize = (cakeSize) => {
  return {
    type: 'CHANGE_CAKE_SIZE',
    payload: cakeSize,
  };
};

export default changeCakeSize;
