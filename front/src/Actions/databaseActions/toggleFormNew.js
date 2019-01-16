export const toggleFormNew = (visible) => {
  return {
    type: 'TOGGLE_FORM',
    visible,
  };
};

export const toggleFormModify = (show) => {
  return {
    type: 'TOGGLE_MODIFY_FORM',
    show,
  };
};
