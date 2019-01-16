import axios from 'axios';

export const saveCustomer = (customer) => {
  axios.get('/customer', customer).then((res) => {
    console.log("res in customer get", res);
    if (res.data.length > 0) window.alert("Utilisateur déjà existant")
    else {
      axios.post('customer/new', customer)
        .then((result) => {
          console.log(result);
          return result.data.id;
        });
    }
  });
};

export const getIngredientsID = async (cake) => {
  const IDlist = [];
  cake.ingredients.map(ingredient => IDlist.push(ingredient.id));
  return IDlist;
};

export const saveCustomWishes = (customWishes) => {
  axios.post('/customwishes/new', customWishes).then(res => console.log(res));
};

export const saveCake = (cake, customWishesID) => {
  const cakeToPush = {
    ...cake,
    customWishesID,
  };
  axios.post('/cake/new', cakeToPush)
    .then(res => console.log(res));
};

export const populateCakeIngrJT = (cakeID, ingredientIDList) => {
  ingredientIDList.map((ingredientID) => {
    axios.post('/jtcakeingredients', { cakeID, ingredientID });
  });
};

export const saveOrder = (customerID, cakeID, order) => {
  const orderToPush = {
    customer_id: customerID,
    cake_id: cakeID,
    order_date: order.order_date,
    delivery_date: order.delivery_date,
    customer_status: 'Commandée',
    admin_status: '',
    customer_comments: order.customer_comments,
    customer_message: order.customer_message,
  };
  axios.post('/order/new', orderToPush).then((res) => {
    console.log(res)
    if (res.status === 200) window.alert("Commande enregistrée");
    else window.alert("Arf, problème à la commande")
  });
};
