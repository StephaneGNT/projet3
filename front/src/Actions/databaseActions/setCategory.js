export const setCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    category,
  };
};

export const modsetCategory = (category) => {
  return {
    type: 'MOD_SET_CATEGORY',
    category,
  };
};

export const setIndex = (index) => {
  return {
    type: 'SET_INDEX',
    index,
  };
};
