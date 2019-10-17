import {
  AUTHENTICATED,
  USER,
  AUTHENTICATING
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  user: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case USER:
      return {
        ...state,
        user: action.payload
      }
    case AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.payload
      }
    default:
      return state;
  }
}