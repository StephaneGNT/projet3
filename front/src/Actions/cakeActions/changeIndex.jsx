export const changeIndex = num => ({
  type: 'CHANGE_INDEX',
  payload: num,
});


export const updateIndex = (num) => {
  console.log(num);
  return(
  {type: 'UPDATE_INDEX_VIA_PROGRESSBAR',
  payload: num,}
  )
};
