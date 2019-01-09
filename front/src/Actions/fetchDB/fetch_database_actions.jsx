import axios from 'axios';

const axiosIngredientsDB = (ingredTableName) => {
  const actionType = (ingred) => {
    switch (ingred) {
      case 'cake_bases': return 'GET_CAKE_BASES';
      case 'cookie_bases': return 'GET_COOKIE_BASES';
      case 'brownie_bases': return 'GET_BROWNIE_BASES';
      case 'fillings': return 'GET_FILLINGS';
      case 'icings': return 'GET_ICINGS';
      case 'toppings': return 'GET_TOPPINGS';
      case 'macaron_flavors': return 'GET_MACARON_FLAVORS';
      case 'macaron_shells': return 'GET_MACARON_SHELLS';
      default: return 'GET_CHEESECAKE_FLAVORS';
    }
  };
  return dispatch => (
    axios.get(`/ingredients/${ingredTableName}`)
      .then(res => dispatch({ type: actionType(ingredTableName), payload: res.data }))
  );
};

export default axiosIngredientsDB;
