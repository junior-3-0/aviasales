import { combineReducers } from '@reduxjs/toolkit'

import sort from './sort'
import checked from './checked'
import tickets from './tickets'
import search from './searchId'
import count from './count'

const reducer = combineReducers({
  tickets,
  sort,
  checked,
  search,
  count,
})

export default reducer
