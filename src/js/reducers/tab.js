import {
  RECEIVED_TABS,
  QUERY,
  SELECT_TAB,
  SELECT_DOWN,
  SELECT_UP,
} from 'actions/tab'

import Fuse from 'fuse.js'
import { findIndex, sortBy } from 'lodash'

let initial = {
  tabs: [],
  filtered: [],
  query: null,
  selected: null,
}

const fuseOptions = {
  keys: ['url', 'title'],
  shouldSort: true,
  findAllMatches: true,
  caseSensitive: true,
}

const getNextSelectedItem = (tabs, selected) => {
  let currentInd = findIndex(tabs, t => t.id === selected.id)
  if (tabs[currentInd + 1])
    return tabs[currentInd + 1]
  else
    return tabs[0]
}

const getPreviousSelectedItem = (tabs, selected) => {
  let currentInd = findIndex(tabs, t => t.id === selected.id)
  if (tabs[currentInd - 1])
    return tabs[currentInd - 1]
  else
    return tabs[tabs.length - 1]
}

const activeTabToLast = (tabs) => {
  return sortBy(tabs, t => t.active)
}

export default function reduce(state = initial, action) {
  let tabs
  console.log(state, action)
  switch (action.type) {
    case QUERY:
      if (action.term.length)
        tabs = new Fuse(state.tabs, fuseOptions).search(action.term)
      else
        tabs = state.tabs

      tabs = activeTabToLast(tabs)
      return { ...state, query: action.term, filtered: tabs, selected: tabs[0]  }
    case RECEIVED_TABS:
      tabs = state.query ? new Fuse(action.tabs, fuseOptions).search(state.query) : action.tabs
      tabs = activeTabToLast(tabs)
      return { ...state, tabs, filtered: tabs, selected: state.selected || tabs[0] }
    case SELECT_TAB:
      return { ...state, selected: null, query: null }
    case SELECT_DOWN:
      return { ...state, selected: getNextSelectedItem(state.filtered, state.selected) }
    case SELECT_UP:
      return { ...state, selected: getPreviousSelectedItem(state.filtered, state.selected) }
    default:
      return state
  }
}
