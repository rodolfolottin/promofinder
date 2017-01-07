import { FETCH_FAILED, FETCH_SUCCESS, FETCH_EMPTY, SEARCH_ITEM } from '../constants/actionsTypes';

export function searchItem(text) {
  return dispatch =>
    fetch('http://localhost:5000/hardmob_promos/' + text), {
      method: 'get'
    }).then(response => {
        switch (response.status) {
          case 200:
            console.log(response);
            dispatch(fetchSuccess(response));
            break;
          case 204:
            console.log(response);
            dispatch(fetchEmpty(response));
            break;
          case 404:
            console.log(response);
            dispatch(fetchError(response));
            break;
          default:
            console.log(response)
        }
    }).catch(error => {
        console.log('Request failed', error);
    });
}

export function fetchSuccess(response) {
  return dispatch => {
    dispatch({ response, type: FETCH_SUCCESS });
  }
}

export function fetchEmpty(response) {
  return dispatch => {
    dispatch({ response, type: FETCH_EMPTY });
  }
}

export function fetchFailed(error) {
  return { code: 500, error, type: FETCH_FAILED };
}
