const changeCakeType = (cakeType) => {
  const initialState = {
    type: cakeType,
    size: 0,
    story: 0,
    quantity: 1,
    occasion: '',
    ingredients: [],
    customization: {
      customMessage: {
        choice: 'Pas de message personnalisé',
        price: 0,
      },
      decoration: {
        choice: 'Pas de décoration',
        image: {},
        price: 0,
      },
    },
    comment: '',
    price: 0,
    time: 2,
  };
  return {
    type: 'CHANGE_CAKE_TYPE',
    payload: initialState,
  };
};


export default changeCakeType;
