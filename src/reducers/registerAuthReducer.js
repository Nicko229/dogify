import {
  REGISTERUSERNAME,
  REGISTEREMAIL,
  REGISTERPASSWORD,
  REGISTERCONFIRMPASSWORD,
  REGISTERERRORS,
  REGISTERRESETERRORS,
  REGISTERCOGNITOERRORS
} from '../actions/types';

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {
    cognito: null,
    blankfield: false,
    passwordmatch: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTERUSERNAME:
      return {
        ...state,
        username: action.payload
      }
    case REGISTEREMAIL:
      return {
        ...state,
        email: action.payload
      }
    case REGISTERPASSWORD:
      return {
        ...state,
        password: action.payload
      }
    case REGISTERCONFIRMPASSWORD:
      return {
        ...state,
        confirmPassword: action.payload
      }
    case REGISTERERRORS:
      return {
        ...state,
        errors: action.payload
      }
    case REGISTERRESETERRORS:
      return {
        registerResetErrors: action.payload
      }
    case REGISTERCOGNITOERRORS:
      return {
        registerCognitoErrors: action.payload
      }
    default:
      return state;
  }
}