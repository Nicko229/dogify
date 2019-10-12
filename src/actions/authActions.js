import {
  IS_AUTHENTICATED,
  USER
} from './types';

export let checkAuthenticated = () => {
  return {
    type: IS_AUTHENTICATED,
    payload: "authenticated"
  }
}

// export let returnUser = () => {
//   return {
//     type: USER,
//     payload: 
//   }
// }