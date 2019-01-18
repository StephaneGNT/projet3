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
});

export default allReducers;
