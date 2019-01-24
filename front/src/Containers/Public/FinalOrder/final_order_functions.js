import axios from 'axios';


// Sauvegarde du client - OK back
export const saveCustomer = async (customer) => {
  // const pushedCustomer = {
  //   firstName: customer.firstname,
  //   lastName: customer.lastname,
  //   birthday: customer.birthday,
  //   email: customer.email,
  //   phone: customer.phone,
  // };
  let customerID;
  customerID = await axios.post('/api/customer', customer)
    .then((result) => { if (result.data.id) return result.data.id; });
  if (!(customerID > 0)) {
    customerID = await axios.post('/api/customer/new', customer)
      .then((result) => { console.log(result); return result.data.id; });
  }
  return customerID;
};

// Récupération de l'ID de chacun des ingrédients du gâteau
export const getIngredientsID = cake => {
  console.log(cake);
  return cake.ingredients.map(ingredient => ingredient.id)
};

// Sauvegarde des custom wishes - OK back
export const saveCustomWishes = async (customWishes) => {
  const customWishesID = await axios.post('/api/customwishes/new', customWishes).then((res) => {
    return res.data.id;
  });
  return customWishesID;
};

// Sauvegarde du gâteau - OK back
export const saveCake = async (cake, customWishesID) => {
  const cakeToPush = {
    type: cake.type,
    size: (cake.size).toString(),
    quantity: cake.quantity,
    story: cake.story,
    occasion: cake.occasion,
    price: cake.price,
    customWishes: customWishesID,
  };
  const cakeID = await axios.post('/cakes/new', cakeToPush)
    .then((res) => {
      return res.data.id;
    });
  return cakeID;
};

// Remplissage de la junction table final_cake / ingredients - OK back
export const populateCakeIngrJT = (cakeID, ingredientIDList) => {
  console.log(ingredientIDList);
  ingredientIDList.map((ingredientID) => {
    axios.post('/api/jtcakeingredients', { cakeID, ingredientID });
  });
};

// Sauvegarde de la commande finale - OK back
export const saveOrder = async (customerID, cakeID, order, comment, giftcard) => {
  const orderToPush = {
    customerID,
    cakeID,
    orderDate: order.order_date,
    deliveryDate: order.delivery_date,
    customerStatus: 'Commandée',
    adminStatus: '',
    customerComment: comment,
    customerMessage: giftcard,
  };
  const orderID = await axios.post('/api/orders/new', orderToPush).then((res) => {
    if (res.status === 200) return (res.data.insertId);
    return 0;
  });
  return orderID;
};

export const populateClientOrderJT = (customerID, orderID) => {
  axios.post('/api/jtclientorder', { customerID, orderID });
};
