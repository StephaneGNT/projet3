import { combineReducers } from 'redux';
import cakeBasesReducer from './cake_bases_reducer';
import cakeFillingsReducer from './cake_fillings_reducer';
import cakeIcingsReducer from './cake_icings_reducer';
import cheesecakePerfumesReducer from './cheesecake_perfumes_reducer';
import macaronsPerfumesReducer from './macarons_perfumes_reducer';
import cakeToppingsReducer from './cake_toppings_reducer';
import cakeCharacsReducer from './cake_characteristics_reducer';
import pageIndexReducer from './page_index_reducer';
import defaultImageReducer from './default_images_reducer';
import macaronsCoquillesReducer from './macaron_coquilles_reducer';
import cookiesBasesReducer from './cookie_bases_reducer';
import browniesBasesReducer from './brownie_bases_reducer';
import chosenStoriesReducer from './chosen_story_reducer';
import orderReducer from './order_reducer';

const allReducers = combineReducers({
  cakeBases: cakeBasesReducer,
  cakeFillings: cakeFillingsReducer,
  cakeIcings: cakeIcingsReducer,
  cheesecakePerfumes: cheesecakePerfumesReducer,
  macaronsPerfumes: macaronsPerfumesReducer,
  cakeToppings: cakeToppingsReducer,
  cakeCharacteristics: cakeCharacsReducer,
  pageIndex: pageIndexReducer,
  defaultImage: defaultImageReducer,
  macaronsCoquilles: macaronsCoquillesReducer,
  cookiesBases: cookiesBasesReducer,
  browniesBases: browniesBasesReducer,
  chosenStories: chosenStoriesReducer,
  orderCharacteristics: orderReducer,
});

export default allReducers;
