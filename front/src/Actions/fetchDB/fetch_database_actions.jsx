import axios from 'axios';

const axiosIngredientsDB = () => (dispatch => (
  axios.get('/api/ingredients')
    .then(res => dispatch({ type: 'GET_INGREDIENTS', payload: res.data }))
));

export default axiosIngredientsDB;
