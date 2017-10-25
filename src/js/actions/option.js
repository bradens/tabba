export const SAVE_OPTIONS = 'SAVE_OPTIONS'
export const SAVE_OPTIONS_SUCCESS = 'SAVE_OPTIONS_SUCCESS'
export const SAVE_OPTIONS_FAILURE = 'SAVE_OPTIONS_FAILURE'
export const GET_OPTIONS = 'GET_OPTIONS'
export const GET_OPTIONS_SUCCESS = 'GET_OPTIONS_SUCCESS'

export function saveOptions(options) {
  return dispatch => {
    dispatch({ type: SAVE_OPTIONS })
    return chrome.storage.sync.set({
      options
    }, () => {
      dispatch({ type: SAVE_OPTIONS_SUCCESS })
    })
  }
}

export function getOptions(cb = null) {
  return dispatch => {
    dispatch({ type: GET_OPTIONS })
    return chrome.storage.sync.get('options',
      ({ options }) => {
        dispatch({ type: GET_OPTIONS_SUCCESS, options })
        cb && cb()
      }
    )
  }
}
