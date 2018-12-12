export const addCakePieces = (amount) => {
  return {
    type: 'ADD_PIECES',
    payload: amount,
  };
};

export const removeCakePieces = (amount) => {
  return {
    type: 'REMOVE_PIECES',
    payload: amount,
  };
};
