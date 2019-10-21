import { combineReducers } from 'redux';
import dogsReducer from './dogsReducer';
import authReducer from './authReducer';
import registerAuthReducer from './registerAuthReducer';

export default combineReducers({
  dogs: dogsReducer,
  auth: authReducer,
  registerAuth: registerAuthReducer
});