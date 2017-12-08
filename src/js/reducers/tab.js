import {
  RECEIVED_TABS,
  QUERY,
  SELECT_TAB,
  SELECT_DOWN,
  SELECT_UP,
  CLOSE_SELECTED,
} from 'actions/tab'

import find from 'lodash/find'
import get from 'lodash/get'
import Fuse from 'fuse.js'
import { findIndex, sortBy, remove } from 'lodash'

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
  let tabs, selected
  switch (action.type) {
    case QUERY:
      if (action.term.length)
        tabs = new Fuse(state.tabs, fuseOptions).search(action.term)
      else
        tabs = state.tabs
      tabs = activeTabToLast(tabs)
      selected = action.term.length ? tabs[0] : find(tabs, t => t.id === get(state.selected, 'id'))
      return { ...state, query: action.term, filtered: tabs, selected }
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
    case CLOSE_SELECTED:
      selected = getNextSelectedItem(state.filtered, state.selected)
      remove(state.tabs, (tab) => (tab.id === action.id))
      remove(state.filtered, (tab) => (tab.id === action.id))
      return { ...state, selected }
    default:
      return state
  }
}
