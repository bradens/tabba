import "styles/options.css";

import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store'
import Main from './options/index'
import { Provider } from 'react-redux'
import { getOptions } from 'actions/option'

let root = document.getElementById('tabba-options-root')
let store = createStore()

store.dispatch(getOptions())

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
, root)
