import { combineReducers } from 'redux';
import cakeBasesReducer from './cake_bases_reducer';
import cakeIcingsReducer from './cake_icings_reducer';
import cakeFillingsReducer from './cake_fillings_reducer';
import cakeToppingsReducer from './cake_toppings_reducer';
import cakeCharacsReducer from './cake_characteristics_reducer';
import pageIndexReducer from './page_index_reducer';
import defaultImageReducer from './default_images_reducer';

const allReducers = combineReducers({
  cakeBases: cakeBasesReducer,
  cakeIcings: cakeIcingsReducer,
  cakeFillings: cakeFillingsReducer,
  cakeToppings: cakeToppingsReducer,
  cakeCharacteristics: cakeCharacsReducer,
  pageIndex: pageIndexReducer,
  defaultImage: defaultImageReducer,
});

export default allReducers;
