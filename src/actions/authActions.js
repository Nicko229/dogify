import {
  AUTHENTICATED,
  USER,
  AUTHENTICATING
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