export const addCakePieces = (amount) => {
  console.log(amount);
  return {
    type: 'ADD_PIECES',
    payload: amount,
  };
};

export const removeCakePieces = (amount) => {
  console.log(amount);
  return {
    type: 'REMOVE_PIECES',
    payload: amount,
  };
};
