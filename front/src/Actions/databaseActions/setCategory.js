const setCategory = (category) => { 
  console.log(category);
  return {
    type: 'SET_CATEGORY',
    category,
  };
};

export default setCategory;
