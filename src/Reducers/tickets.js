const initialState = {
  tickets: [],
  stop: false,
}

function tickets(state = initialState, { type, data } = {}) {
  if (type === 'GET_TICKETS_LIST') {
    return {
      tickets: [...state.tickets, ...data.tickets],
      stop: data.stop,
    }
  }
  return state
}

export default tickets
