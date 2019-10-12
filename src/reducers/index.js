import { combineReducers } from 'redux';
import dogsReducer from './dogsReducer';

export default combineReducers({
  dogs: dogsReducer
});