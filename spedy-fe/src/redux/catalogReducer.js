import { FETCH_CATALOG_PENDING, FETCH_CATALOG_SUCCESS, FETCH_CATALOG_ERROR } from './actions'

const initialState = {
    pending: false,
    catalog: [],
    error: null
}

export function catalogReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CATALOG_PENDING:
      return { 
        ...state,
        pending: true 
      }
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        pending: false,
        catalog: action.catalog
      }
    case FETCH_CATALOG_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default: 
      return state
  }
}

export const getCatalog = state => state.catalog
export const getCatalogPending = state => state.pending
export const getCatalogError = state => state.error