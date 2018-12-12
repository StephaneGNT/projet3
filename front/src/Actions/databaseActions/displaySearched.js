const displaySearched = (search) => {
  console.log(search);
  return {
    type: 'SHOW_SEARCHED',
    search,
  };
};

export default displaySearched;
