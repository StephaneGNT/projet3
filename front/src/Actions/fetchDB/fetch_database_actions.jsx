import axios from 'axios';

export const getCakeBases = () => (dispatch => (
  axios.get('/ingredients/cakebases')
    .then(response => dispatch({ type: 'GET_CAKE_BASES', payload: response.data }))
));

export const getFillings = () => (dispatch => (
  axios.get('/ingredients/fillings')
    .then(response => dispatch({ type: 'GET_FILLINGS', payload: response.data }))
));

export const getIcings = () => (dispatch => (
  axios.get('/ingredients/icings')
    .then(response => dispatch({ type: 'GET_ICINGS', payload: response.data }))
));

export const getToppings = () => (dispatch => (
  axios.get('/ingredients/toppings')
    .then(response => dispatch({ type: 'GET_TOPPINGS', payload: response.data }))
));

export const getCheesecakeFlavor = () => (dispatch => (
  axios.get('/ingredients/cheesecakeFlavors')
    .then(response => dispatch({ type: 'GET_CHEESECAKE_FLAVORS', payload: response.data }))
));

export const getCookieBases = () => (dispatch => (
  axios.get('/ingredients/cookieBases')
    .then(response => dispatch({ type: 'GET_COOKIE_BASES', payload: response.data }))
));

export const getMacaronShells = () => (dispatch => (
  axios.get('/ingredients/macaronShells')
    .then(response => dispatch({ type: 'GET_MACARON_SHELLS', payload: response.data }))
));

export const getMacaronFlavors = () => (dispatch => (
  axios.get('/ingredients/macaronFlavors')
    .then(response => dispatch({ type: 'GET_MACARON_FLAVORS', payload: response.data }))
));

export const getBrownieBases = () => (dispatch => (
  axios.get('/ingredients/brownieBases')
    .then(response => dispatch({ type: 'GET_BROWNIE_BASES', payload: response.data }))
));
