import { FETCH_FAILED, FETCH_SUCCESS, FETCH_EMPTY, SEARCH_ITEM } from '../constants/actionsTypes';

const initialState = {
  loading: false,
  promos: [],
  code: null,
  error: null
}

export default function promoApp(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SEARCH_ITEM:
      return Object.assign({}, state, {
        loading: true,
        promos: state.promos,
        code: null,
        error: null
      })
      break;
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        promos: action.promos,
        code: action.code,
        error: null
      })
      break;
    case FETCH_EMPTY:
      return Object.assign({}, state, {
        loading: false,
        promos: action.promos,
        code: action.code,
        error: null
      })
      break;
     case FETCH_FAILED:
      return Object.assign({}, state, {
        loading: false,
        promos: null,
        code: action.code,
        error: action.error
      })
      break;
    default:
      return state
  }
}
