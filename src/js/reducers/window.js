import {
  SHOW_WINDOW,
  HIDE_WINDOW,
  TOGGLE_WINDOW,
} from 'actions/window'

import { SELECT_TAB } from 'actions/tab'

let initial = {
  shown: false,
}

export default function reduce(state = initial, action) {
  switch (action.type) {
    case SHOW_WINDOW:
      return { ...state, shown: true }
    case HIDE_WINDOW:
      return { ...state, shown: false }
    case TOGGLE_WINDOW:
      return { ...state, shown: !state.shown }
    case SELECT_TAB:
      return { ...state, shown: false }
    default:
      return state
  }
}
