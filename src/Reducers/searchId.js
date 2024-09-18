const initialState = null

function search(state = initialState, { type, searchId } = {}) {
  if (type === 'GET_TOKEN') {
    return searchId
  }
  return state
}

export default search
