import {
  SAVE_OPTIONS,
  SAVE_OPTIONS_SUCCESS,
  GET_OPTIONS,
  GET_OPTIONS_SUCCESS,
} from 'actions/option'

let initialState = {
  loadingOptions: true,
  options: {
    toggle: ['command', '.'],
    next: ['ctrl', 'n'],
    previous: ['ctrl', 'p'],
    hide: ['esc'],
    close: ['ctrl', 'q'],
  }
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SAVE_OPTIONS:
      return { ...state, saving: true }
    case SAVE_OPTIONS_SUCCESS:
      return { ...state, saving: false }
    case GET_OPTIONS:
      return { ...state, loadingOptions: true }
    case GET_OPTIONS_SUCCESS:
      return { ...state, loadingOptions: false, options: { ...state.options, ...action.options } }
    default:
      return state
  }
}
