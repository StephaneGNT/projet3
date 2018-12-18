const changeCakeType = (cakeType) => {
  return {
    type: 'CHANGE_CAKE_TYPE',
    payload: cakeType,
  };
};

export default changeCakeType;
