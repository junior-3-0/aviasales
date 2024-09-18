import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './Reducers/reducer'
import './index.scss'

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

const rootElement = document.getElementById('root')
const createRoot = ReactDOM.createRoot(rootElement)
createRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
)

export default store
