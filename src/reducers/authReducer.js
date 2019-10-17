import {
  AUTHENTICATED,
  USER,
  AUTHENTICATING,
  USERNAME,
  PASSWORD,
  ERRORS
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  user: null,
  username: "",
  password: ""
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
    case USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    case ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}