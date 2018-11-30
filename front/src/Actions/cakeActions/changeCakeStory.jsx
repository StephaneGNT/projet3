const changeCakeStory = (story) => {
  console.log('Nombre étage : ', story);
  return {
    type: 'CHANGE_CAKE_ETAGE',
    payload: story,
  };
};

export default changeCakeStory;
