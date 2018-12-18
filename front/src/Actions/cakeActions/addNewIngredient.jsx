const addNewIngredient = (ingredientType) => {
  return {
    type: 'ADD_NEW_INGREDIENT',
    payload: ingredientType,
  };
};

export default addNewIngredient;