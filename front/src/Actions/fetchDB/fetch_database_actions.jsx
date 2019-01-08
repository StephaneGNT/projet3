import axios from 'axios';

export const getCakeBases = () => (dispatch => (
  axios.get('/api/cakebases')
    .then(data => dispatch({ type: 'GET_CAKE_BASES', payload: data }))
));

export const getFillings = () => (dispatch => (
  axios.get('/api/fillings')
    .then(data => dispatch({ type: 'GET_FILLINGS', payload: data }))
));

export const getIcings = () => (dispatch => (
  axios.get('/api/icings')
    .then(data => dispatch({ type: 'GET_ICINGS', payload: data }))
));

export const getToppings = () => (dispatch => (
  axios.get('/api/toppings')
    .then(data => dispatch({ type: 'GET_TOPPINGS', payload: data }))
));

export const getCheesecakeFlavor = () => (dispatch => (
  axios.get('/api/cheesecakeFlavors')
    .then(data => dispatch({ type: 'GET_CHEESECAKE_FLAVORS', payload: data }))
));

export const getCookieBases = () => (dispatch => (
  axios.get('/api/cookieBases')
    .then(data => dispatch({ type: 'GET_COOKIE_BASES', payload: data }))
));

export const getMacaronShells = () => (dispatch => (
  axios.get('/api/macaronShells')
    .then(data => dispatch({ type: 'GET_MACARON_SHELLS', payload: data }))
));

export const getMacaronFlavors = () => (dispatch => (
  axios.get('/api/macaronFlavors')
    .then(data => dispatch({ type: 'GET_MACARON_FLAVORS', payload: data }))
));

export const getBrownieBases = () => (dispatch => (
  axios.get('/api/brownieBases')
    .then(data => dispatch({ type: 'GET_BROWNIE_BASES', payload: data }))
));
