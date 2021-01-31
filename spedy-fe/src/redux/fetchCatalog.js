import { fetchCatalogSuccess, fetchCatalogPending, fetchCatalogError } from './actions'

function fetchCatalog() {
    return dispatch => {
        dispatch(fetchCatalogPending())
        fetch('http://localhost:44370/api/catalog/getcatalog')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchCatalogSuccess(res))
            return res
        })
        .catch(error => {
            dispatch(fetchCatalogError(error))
        })
    }
}

export default fetchCatalog