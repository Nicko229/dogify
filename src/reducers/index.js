import { combineReducers } from 'redux';
import dogsReducer from './dogsReducer';
import authReducer from './authReducer';

export default combineReducers({
  dogs: dogsReducer,
  auth: authReducer
});