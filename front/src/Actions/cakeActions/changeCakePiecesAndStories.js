export const addCakePieces = amount => ({
  type: 'ADD_PIECES',
  payload: amount,
});


export const removeCakePieces = amount => ({
  type: 'REMOVE_PIECES',
  payload: amount,
});

export const resetCakePieces = () => ({
  type: 'RESET_PIECES',
});
