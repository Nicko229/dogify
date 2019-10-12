import { FETCH_ALL_BREEDS, FETCH_PUGS } from './types';

const fetchDogs = () => dispatch => {

  console.log("Fetching")
  fetch(`https://dog.ceo/api/breed/pug/images/random`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_PUGS,
        payload: data.message
      }));
}

export default fetchDogs
// TODO possibly need to find where data is on the object??