const changeIndex = (num) => {
console.log('launched changeIndex', num);
  return {
    type: 'CHANGE_INDEX',
    payload: num,
  };
};

export default changeIndex;
