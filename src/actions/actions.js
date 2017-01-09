import fetch from 'isomorphic-fetch';
import { FETCH_FAILED, FETCH_SUCCESS, FETCH_EMPTY } from '../constants/actionsTypes';

export function searchItem(text) {
  return function (dispatch) {
    return fetch('http://localhost:5000/hardmob_promos/'.concat(text))
    .then(response => response.json())
    .then(json => {
        switch (json.code) {
          case 200:
            console.log(json);
            dispatch(fetchSuccess(json));
            break;
          case 204:
            console.log(json);
            dispatch(fetchEmpty(json));
            break;
          case 404:
            console.log(json);
            dispatch(fetchFailed(json));
            break;
          default:
            console.log(json)
        };
    }).catch(error => {
        console.log('Request failed', error);
    });
  }
}

export function fetchSuccess(json) {
  return {
      code: json.code,
      promos: json.promos,
      type: FETCH_SUCCESS
  }
}

export function fetchEmpty(json) {
  return {
      code: json.code,
      promos: null,
      type: FETCH_EMPTY
  }
}

export function fetchFailed(error) {
  return {
      code: 500,
      error,
      type: FETCH_FAILED
  }
}
