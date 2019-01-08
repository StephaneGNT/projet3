import axios from 'axios';

export const getCakeBases = () => (dispatch => (
  axios.get('/incredients/cakebases')
    .then((data) => {
      console.log(data);
      dispatch({ type: 'GET_CAKE_BASES', payload: data });
    })
));

export const getFillings = () => (dispatch => (
  axios.get('/incredients/fillings')
    .then(data => dispatch({ type: 'GET_FILLINGS', payload: data }))
));

export const getIcings = () => (dispatch => (
  axios.get('/incredients/icings')
    .then(data => dispatch({ type: 'GET_ICINGS', payload: data }))
));

export const getToppings = () => (dispatch => (
  axios.get('/incredients/toppings')
    .then(data => dispatch({ type: 'GET_TOPPINGS', payload: data }))
));

export const getCheesecakeFlavor = () => (dispatch => (
  axios.get('/incredients/cheesecakeFlavors')
    .then(data => dispatch({ type: 'GET_CHEESECAKE_FLAVORS', payload: data }))
));

export const getCookieBases = () => (dispatch => (
  axios.get('/incredients/cookieBases')
    .then(data => dispatch({ type: 'GET_COOKIE_BASES', payload: data }))
));

export const getMacaronShells = () => (dispatch => (
  axios.get('/incredients/macaronShells')
    .then(data => dispatch({ type: 'GET_MACARON_SHELLS', payload: data }))
));

export const getMacaronFlavors = () => (dispatch => (
  axios.get('/incredients/macaronFlavors')
    .then(data => dispatch({ type: 'GET_MACARON_FLAVORS', payload: data }))
));

export const getBrownieBases = () => (dispatch => (
  axios.get('/incredients/brownieBases')
    .then(data => dispatch({ type: 'GET_BROWNIE_BASES', payload: data }))
));
