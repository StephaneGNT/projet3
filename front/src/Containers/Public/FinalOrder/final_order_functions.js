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
  const pushedCustomer = customer;
  let customerID;
  customerID = await axios.post('/customer', pushedCustomer)
    .then((result) => { if (result.data.id) return result.data.id; });
  if (!(customerID > 0)) {
    customerID = await axios.post('/customer/new', pushedCustomer)
      .then((result) => { return result.data.id; });
  }
  return customerID;
};

// Récupération de l'ID de chacun des ingrédients du gâteau
export const getIngredientsID = (cake) => {
  const IDlist = [];
  cake.ingredients.map(ingredient => IDlist.push(ingredient.id));
  return IDlist;
};

// Sauvegarde des custom wishes - OK back
export const saveCustomWishes = async (customWishes) => {
  console.log("customWishes", customWishes)
  const customWishesID = await axios.post('/customwishes/new', customWishes).then((res) => {
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
  ingredientIDList.map((ingredientID) => {
    axios.post('/jtcakeingredients', { cakeID, ingredientID });
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
  const orderID = await axios.post('/orders/new', orderToPush).then((res) => {
    if (res.status === 200) return (res.data.insertId);
    return 0;
  });
  return orderID;
};

export const populateClientOrderJT = (customerID, orderID) => {
  axios.post('/jtclientorder', { customerID, orderID });
}