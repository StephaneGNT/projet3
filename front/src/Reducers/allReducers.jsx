import { combineReducers } from 'redux';
import cakeCharacsReducer from './cake_characteristics_reducer';
import calendarAdminReducer from './calendar_admin_reducer';
import pageIndexReducer from './page_index_reducer';
import defaultImageReducer from './default_images_reducer';
import chosenStoriesReducer from './chosen_story_reducer';
import orderReducer from './order_reducer';
import customerInfoReducer from './customer_info_reducer';
import customizationAdminReducer from './customization_admin_reducer';
import customizationCustomerReducer from './customization_customer_reducer';
import databaseDisplayReducer from './database_display_reducer';
import databaseNewIngredientDisplayReducer from './database_new_ingredient_reducer';
import databaseDisplayModifyForm from './database_display_modifyForm';
import { leftPics, rightPics } from './pics_reducer';
import adminIndexReducer from './admin_index_reducer';
import adminTokenReducer from './admin_token_reducer';
import ingredientsReducer from './ingredients_reducer';
import cakeListReducer from './list_cakes';
import orderListReducer from './list_orders';
import customersListReducer from './list_clients';
import descriptionsReducer from './home_page_contact_descriptions';

const allReducers = combineReducers({
  ingredients: ingredientsReducer,
  cakeCharacteristics: cakeCharacsReducer,
  calendarAdmin: calendarAdminReducer,
  pageIndex: pageIndexReducer,
  defaultImage: defaultImageReducer,
  chosenStories: chosenStoriesReducer,
  orderCharacteristics: orderReducer,
  customerInfo: customerInfoReducer,
  customizationAdmin: customizationAdminReducer,
  customizationCustomer: customizationCustomerReducer,
  databaseDisplay: databaseDisplayReducer,
  databaseNewIngredientDisplay: databaseNewIngredientDisplayReducer,
  databaseModifyFormIndex: databaseDisplayModifyForm,
  leftColumnPics: leftPics,
  rightColumnPics: rightPics,
  adminIndex: adminIndexReducer,
  adminToken: adminTokenReducer,
  cakeList: cakeListReducer,
  orderList: orderListReducer,
  customerList: customersListReducer,
  descriptions: descriptionsReducer,
});

export default allReducers;
