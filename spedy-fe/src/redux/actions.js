export const FETCH_CATALOG_PENDING = 'FETCH_CATALOG_PENDING'
export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS'
export const FETCH_CATALOG_ERROR = 'FETCH_CATALOG_ERROR'

export function fetchCatalogPending() {
    return {
        type: FETCH_CATALOG_PENDING
    }
}

export function fetchCatalogSuccess(catalog) {
    return {
        type: FETCH_CATALOG_SUCCESS,
        catalog: catalog
    }
}

export function fetchCatalogError(error) {
    return {
        type: FETCH_CATALOG_ERROR,
        error: error
    }
}