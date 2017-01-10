import fetch from 'isomorphic-fetch';
import { FETCH_FAILED, FETCH_SUCCESS, FETCH_EMPTY, SEARCH_ITEM } from '../constants/actionsTypes';

export function searchItem(text) {
  return function (dispatch) {
    dispatch(fetchStarting(text));
    return fetch('http://localhost:5000/hardmob_promos/'.concat(text))
    .then(response => response.json())
    .then(json => {
        switch (json.code) {
          case 200:
            dispatch(fetchSuccess(json));
            break;
          case 204:
            dispatch(fetchEmpty(json));
            break;
          case 404:
            dispatch(fetchFailed(json));
            break;
          default:
            break;
        };
    }).catch(error => {
        dispatch(fetchFailed(error));
        console.log('Request failed', error);
    });
  }
}

function fetchStarting(text) {
  return {
      type: SEARCH_ITEM
  }
}

function fetchSuccess(json) {
  return {
      code: json.code,
      promos: json.promos,
      type: FETCH_SUCCESS
  }
}

function fetchEmpty(json) {
  return {
      code: json.code,
      promos: null,
      type: FETCH_EMPTY
  }
}

function fetchFailed(error) {
  return {
      code: 500,
      error: error,
      type: FETCH_FAILED
  }
}
