import {
  FETCH_ALL_BREEDS,
  FETCH_PUGS,
  CHOOSE_BREED
} from './types';

export let breedInput = (e) => {
  return {
    type: CHOOSE_BREED,
    payload: e.target.value
  }
}

export let fetchPugs = () => dispatch => {
  fetch(`https://dog.ceo/api/breed/pug/images/random`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_PUGS,
        payload: data.message
      }));
}

export let fetchAllBreeds = (breedInput) => dispatch => {
  fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
    .then(res => res.json())

    .then(data => dispatch({
      type: FETCH_ALL_BREEDS,
      payload: data.message
    }))
}

