import { FETCH_FAILED, FETCH_SUCCESS, FETCH_EMPTY, SEARCH_ITEM } from '../constants/actionsTypes';

const initialState = {
  loading: false,
  promos: [],
  code: null,
  error: null
}

export default function promoApp(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ITEM:
      return Object.assign({}, state, {
        loading: true,
        promos: [],
        code: null,
        error: null
      })
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        promos: action.promos,
        code: action.code,
        error: null
      })
    case FETCH_EMPTY:
      return Object.assign({}, state, {
        loading: false,
        promos: action.promos,
        code: action.code,
        error: null
      })
     case FETCH_FAILED:
      return Object.assign({}, state, {
        loading: false,
        promos: state.promos,
        code: action.code,
        error: action.error
      })
    default:
      return state
  }
}
