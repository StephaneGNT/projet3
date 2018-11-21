import { combineReducers } from 'redux';
import cakeBaseReducer from './cake_base_reducer';
import cakeIcingReducer from './cake_icing_reducer';
import cakeCharacReducer from './cake_characteristics_reducer';

const allReducers = combineReducers({
  cakeBases: cakeBaseReducer,
  cakeIcings: cakeIcingReducer,
  cakeCharacteristics: cakeCharacReducer,
});

export default allReducers;
