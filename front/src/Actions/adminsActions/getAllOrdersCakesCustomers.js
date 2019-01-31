
export const getAllOrders = orderList => ({
  type: 'SAVE_ORDERS',
  orderList,
});

export const getAllCustomers = customerList => ({
  type: 'SAVE_CUSTOMERS',
  customerList,
});

export const getAllCakes = cakeList => ({
  type: 'SAVE_CAKES',
  cakeList,
});

export const getAllAdmins = adminList => ({
  type: 'SAVE_ADMINS',
  adminList,
});
