import "styles/options.css";

import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store'
import Main from './options/index'
import { Provider } from 'react-redux'

let root = document.getElementById('tabzy-options-root')
let store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
, root)
