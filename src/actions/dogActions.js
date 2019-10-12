import { FETCH_ALL_BREEDS, FETCH_PUGS } from './types';

export let fetchDogs = () => dispatch => {
  console.log("Fetching")
  fetch(`https://dog.ceo/api/breed/pug/images/random`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_PUGS,
        payload: data.message
      }));
} 