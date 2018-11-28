const changeCakeType = (cakeType) => {
    console.log('Type de Cake choisit : ', cakeType);
    return {
      type: 'CHANGE_CAKE_TYPE',
      payload: cakeType,
    };
  };
  
  export default changeCakeType;