const initialState = true

function sort(state = initialState, { type, payload } = {}) {
  if (type !== 'SORT_TICKETS_LIST' || state === payload) {
    return state
  }
  return payload
}

export default sort
