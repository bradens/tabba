import React from 'react'
import ReactDOM from 'react-dom'
import Main from './popup/index'
import { Provider } from 'react-redux'
import { init } from './keybindings'
import { receivedTabs } from 'actions/tab'
import { getOptions } from 'actions/option'
import createStore from './store'

let root = document.createElement('div')
let store = createStore()

chrome.extension.connect(null, {})
store.dispatch(getOptions(() => init(store)))

root.setAttribute('id', '__tabba_root__')
document.body.appendChild(root)

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('__tabba_root__')
)

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('[Extension/onMessage]', message, sender)
  store.dispatch(receivedTabs(message.tabs))
});
