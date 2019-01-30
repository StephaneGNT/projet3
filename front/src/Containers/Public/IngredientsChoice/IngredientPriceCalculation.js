const calculateIngredient = (ingredient, cake) => ({
  ...ingredient,
  price: ingredient.price
    * ((() => {
      switch (cake.type) {
        case 'cake': return cake.size;
        case 'cheesecake': return 16;
        default: return cake.quantity;
      }
    })()),
});

export default calculateIngredient;
