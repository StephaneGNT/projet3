const changeOrderAdminStatus = (index, status) => {
  return {
    type: 'CHANGE_ADMIN_STATUS',
    status,
    index,
  }
};

export default changeOrderAdminStatus;
