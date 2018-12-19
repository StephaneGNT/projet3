import { combineReducers } from 'redux';
import cakeBasesReducer from './cake_bases_reducer';
import cakeFillingsReducer from './cake_fillings_reducer';
import cakeIcingsReducer from './cake_icings_reducer';
import cheesecakeFlavorsReducer from './cheesecake_flavors_reducer';
import macaronsFlavorsReducer from './macarons_flavors_reducer';
import cakeToppingsReducer from './cake_toppings_reducer';
import cakeCharacsReducer from './cake_characteristics_reducer';
import pageIndexReducer from './page_index_reducer';
import defaultImageReducer from './default_images_reducer';
import macaronsShellsReducer from './macaron_shells_reducer';
import cookiesBasesReducer from './cookie_bases_reducer';
import browniesBasesReducer from './brownie_bases_reducer';
import chosenStoriesReducer from './chosen_story_reducer';
import orderReducer from './order_reducer';
import customizationAdminReducer from './customization_admin_reducer';
import customizationCustomerReducer from './customization_customer_reducer';
import databaseDisplayReducer from './database_display_reducer';
import databaseNewIngredientDisplayReducer from './database_new_ingredient_reducer';

const allReducers = combineReducers({
  cakeBases: cakeBasesReducer,
  cakeFillings: cakeFillingsReducer,
  cakeIcings: cakeIcingsReducer,
  cheesecakeFlavors: cheesecakeFlavorsReducer,
  macaronsFlavors: macaronsFlavorsReducer,
  cakeToppings: cakeToppingsReducer,
  cakeCharacteristics: cakeCharacsReducer,
  pageIndex: pageIndexReducer,
  defaultImage: defaultImageReducer,
  macaronsShells: macaronsShellsReducer,
  cookiesBases: cookiesBasesReducer,
  browniesBases: browniesBasesReducer,
  chosenStories: chosenStoriesReducer,
  orderCharacteristics: orderReducer,
  customizationAdmin: customizationAdminReducer,
  customizationCustomer: customizationCustomerReducer,
  databaseDisplay: databaseDisplayReducer,
  databaseNewIngredientDisplay: databaseNewIngredientDisplayReducer,
});

export default allReducers;
