import {
  AUTHENTICATED,
  USER,
  AUTHENTICATING,
  USERNAME,
  PASSWORD,
  ERRORS,
  // REGISTERUSERNAME,
  // REGISTEREMAIL,
  // REGISTERPASSWORD,
  // REGISTERCONFIRMPASSWORD,
  // REGISTERERRORS,
  // REGISTERRESETERRORS,
  // REGISTERCOGNITOERRORS
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  user: null,
  username: "",
  password: "",
  // registerUsername: "",
  // registerEmail: "",
  // registerPassword: "",
  // registerConfirmpassword: "",
  // registerErrors: {
  //   cognito: null,
  //   blankfield: false,
  //   passwordmatch: false
  // }
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
    // case REGISTERUSERNAME:
    //   return {
    //     ...state,
    //     registerUsername: action.payload
    //   }
    // case REGISTEREMAIL:
    //   return {
    //     ...state,
    //     registerEmail: action.payload
    //   }
    // case REGISTERPASSWORD:
    //   return {
    //     ...state,
    //     registerPassword: action.payload
    //   }
    // case REGISTERCONFIRMPASSWORD:
    //   return {
    //     ...state,
    //     registerConfirmPassword: action.payload
    //   }
    // case REGISTERERRORS:
    //   return {
    //     ...state,
    //     registerErrors: action.payload
    //   }
    // case REGISTERRESETERRORS:
    //   return {
    //     registerResetErrors: action.payload
    //   }
    // case REGISTERCOGNITOERRORS:
    //   return {
    //     registerCognitoErrors: action.payload
    //   }
    default:
      return state;
  }
}