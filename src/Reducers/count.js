const initialState = 5

function count(state = initialState, action = {}) {
  if (action.type === 'CHANGE_COUNT') {
    return state + 5
  }
  return state
}

export default count
