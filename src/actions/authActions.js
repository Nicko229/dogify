import {
  AUTHENTICATED,
  USER,
  AUTHENTICATING,
  USERNAME,
  PASSWORD,
  ERRORS
} from './types';

export let authenticated = () => {
  return {
    type: AUTHENTICATED,
    payload: true
  }
}

export let user = (user) => {
  return {
    type: USER,
    payload: user
  }
}

export let authenticating = () => {
  return {
    type: AUTHENTICATING,
    payload: false
  }
}

export let usernameState = (event) => {
  return {
    type: USERNAME,
    payload: event.target.value
  }
}

export let passwordState = (event) => {
  return {
    type: PASSWORD,
    payload: event.target.value
  }
}

export let errorsState = (event) => {
  return {
    type: ERRORS,
    payload: {
      cognito: null,
      blankfield: false
    }
  }
}