import {
  REGISTERUSERNAME,
  REGISTEREMAIL,
  REGISTERPASSWORD,
  REGISTERCONFIRMPASSWORD,
  REGISTERERRORS,
  REGISTERRESETERRORS,
  REGISTERCOGNITOERRORS
} from './types';

export let registerUsernameState = (event) => {
  return {
    type: REGISTERUSERNAME,
    payload: event.target.value
  }
}

export let registerEmailState = (event) => {
  return {
    type: REGISTEREMAIL,
    payload: event.target.value
  }
}

export let registerPasswordState = (event) => {
  return {
    type: REGISTERPASSWORD,
    payload: event.target.value
  }
}

export let registerConfirmPasswordState = (event) => {
  return {
    type: REGISTERCONFIRMPASSWORD,
    payload: event.target.value
  }
}

export let registerErrorsState = (errors, error) => {
  return {
    type: REGISTERERRORS,
    payload: {
      errors: {
        ...errors,
        ...error
      }
    }
  }
}

export let registerResetErrorsState = () => {
  return {
    type: REGISTERRESETERRORS,
    payload: {
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    }
  }
}

export let registerCognitoErrorsState = (errors, error) => {
  // console.log("errors action", errors)
  // console.log("error action", error)
  return {
    type: REGISTERCOGNITOERRORS,
    payload: {
      errors: {
        ...errors,
        cognito: error
      }
    }
  }
}