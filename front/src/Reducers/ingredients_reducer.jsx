const splitStringsToArray = (element) => {
  const ele = element;
  ele.allergenes = element.allergenes ? element.allergenes.split(',') : [];
  ele.compatible = element.compatible ? element.compatible.split(',') : [];
  return ele;
};


export default (state = [], action) => {
  switch (action.type) {
    case 'GET_INGREDIENTS':
      return action.payload.map(elem => splitStringsToArray(elem));
    default:
      return state;
  }
};
