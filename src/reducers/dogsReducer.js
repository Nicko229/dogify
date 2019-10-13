import {
  FETCH_ALL_BREEDS,
  FETCH_PUGS,
  CHOOSE_BREED
} from '../actions/types';
import { CognitoSync } from 'aws-sdk';

const initialState = {
  pugs: '',
  dog: '',
  breed: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PUGS:
      return {
        ...state,
        pugs: action.payload
      }
    case FETCH_ALL_BREEDS:
      return {
        ...state,
        allBreeds: action.payload
      }
    case CHOOSE_BREED:
      return {
        ...state,
        breed: action.payload
      }
    default:
      return state;
  }
}