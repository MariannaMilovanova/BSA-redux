import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import users from './reducers/users'
import App from './components/App'
import './style.css'

let store = createStore(users)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)