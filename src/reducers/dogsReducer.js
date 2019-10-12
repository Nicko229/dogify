import { FETCH_ALL_BREEDS, FETCH_PUGS } from '../actions/types';

const initialState = {
  pugs: '',
  dog: '',
  breed: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PUGS:
      console.log("reducer")
      return {
        ...state,
        pugs: action.payload
      }
    default:
      return state;
  }
}