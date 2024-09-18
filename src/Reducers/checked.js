const initialState = {
  allTransfer: false,
  notTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
}

function changeAllValues(state, bool) {
  const obj = {}
  Object.entries(state).map((el) => {
    const [key] = el
    obj[key] = bool
    return obj
  })
  return { ...obj }
}

function checked(state = initialState, { type, payload } = {}) {
  if (type !== 'CHANGE_CHECKBOX') {
    return state
  }
  if (payload === 'allTransfer') {
    return state.allTransfer ? changeAllValues(state, false) : changeAllValues(state, true)
  }
  if (state.allTransfer) {
    return {
      ...state,
      allTransfer: false,
      [payload]: !state[payload],
    }
  }
  if (Object.entries(state).filter((el) => el[1] === true).length >= 3 && !state[payload]) {
    return changeAllValues(state, true)
  }
  return {
    ...state,
    [payload]: !state[payload],
  }
}

export default checked
