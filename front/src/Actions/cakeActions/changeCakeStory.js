const changeCakeStory = story => {
  console.log("received story", story)
  return ({
  type: 'CHANGE_CAKE_STORY',
  payload: story,
});}

export default changeCakeStory;
