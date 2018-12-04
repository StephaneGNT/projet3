export const changeIndex = (num) => {
  return {
    type: 'CHANGE_INDEX',
    payload: num,
  };
};

export const updateIndex = (num) => { 
  return {
    type: 'UPDATE_INDEX_VIA_PROGRESSBAR',
    payload: num,
  };
};
