import axios from 'axios'

export const changeBox = (payload) => ({ type: 'CHANGE_CHECKBOX', payload })
export const sort = (payload) => ({ type: 'SORT_TICKETS_LIST', payload })
export const token = (searchId) => ({ type: 'GET_TOKEN', searchId })
export const tickets = (data) => ({ type: 'GET_TICKETS_LIST', data })
export const change = () => ({ type: 'CHANGE_COUNT' })

export const getTocken = () => async (dispatch) => {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!response.ok) {
      throw new Error('ServerError')
    }
    const { searchId } = await response.json()
    return dispatch(token(searchId))
  } catch (e) {
    throw new Error(e.message)
  }
}

export const subscribe = async (search, dispatch) => {
  try {
    const { data } = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${search}`)
    dispatch(tickets(data))
    if (data.stop) {
      return
    }
    await subscribe(search, dispatch)
  } catch (e) {
    setTimeout(() => {
      subscribe(search, dispatch)
    }, 5000)
  }
}

export const getTickets = (search) => async (dispatch) => {
  subscribe(search, dispatch)
}
