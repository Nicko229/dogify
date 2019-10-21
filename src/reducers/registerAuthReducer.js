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
  registerUsername: "",
  registerEmail: "",
  registerPassword: "",
  registerConfirmpassword: "",
  registerErrors: {
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
        registerUsername: action.payload
      }
    case REGISTEREMAIL:
      return {
        ...state,
        registerEmail: action.payload
      }
    case REGISTERPASSWORD:
      return {
        ...state,
        registerPassword: action.payload
      }
    case REGISTERCONFIRMPASSWORD:
      return {
        ...state,
        registerConfirmPassword: action.payload
      }
    case REGISTERERRORS:
      return {
        ...state,
        registerErrors: action.payload
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