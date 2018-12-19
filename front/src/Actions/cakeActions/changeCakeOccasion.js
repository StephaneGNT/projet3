const changeCakeOccasion = (occasion) => {
  console.log(occasion)
  return {
    type: 'CHANGE_CAKE_OCCASION',
    occasion,
  };
};

export default changeCakeOccasion;
