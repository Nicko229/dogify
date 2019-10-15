import {
  AUTHENTICATED,
  USER,
  AUTHENTICATING
} from './types';

export let authenticated = () => {
  return {
    type: AUTHENTICATED,
    payload: authenticated
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