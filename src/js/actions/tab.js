export const RECEIVED_TABS = 'RECEIVED_TABS'
export const QUERY = 'QUERY'
export const SELECT_TAB = 'SELECT_TAB'
export const SELECT_DOWN = 'SELECT_DOWN'
export const SELECT_UP = 'SELECT_UP'
export const CLOSE_SELECTED = 'CLOSE_SELECTED'

export function receivedTabs (tabs) {
  return {
    type: RECEIVED_TABS,
    tabs
  }
}

export function query (term) {
  return {
    type: QUERY,
    term
  }
}

export function selectTab (id) {
  chrome.runtime.sendMessage({ type: 'selectTab', id })
  return {
    type: SELECT_TAB
  }
}

export function selectDown () {
  return { type: SELECT_DOWN }
}

export function selectUp () {
  return { type: SELECT_UP }
}

export function closeSelected (id) {
  chrome.runtime.sendMessage({ type: 'closeTab', id })
  return {
    type: CLOSE_SELECTED,
    id
  }
}
