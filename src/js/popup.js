import React from 'react'
import ReactDOM from 'react-dom'
import Main from './popup/index'
import icons from './icons'
import { Provider } from 'react-redux'
import { receivedTabs, getTabs } from 'actions/tab'
import { getOptions } from 'actions/option'
import createStore from './store'

let root = document.createElement('div')
let store = createStore()

// Initialize options
store.dispatch(getOptions())

root.setAttribute('id', '__tabba_root__')
document.body.appendChild(root)

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('__tabba_root__')
)

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  store.dispatch(receivedTabs(message.tabs))
});

store.dispatch(getTabs())
