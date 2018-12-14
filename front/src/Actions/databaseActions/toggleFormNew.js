const toggleFormNew = (visible) => {
  console.log(visible);
  return {
    type: 'TOGGLE_FORM',
    visible,
  };
};

export default toggleFormNew;
