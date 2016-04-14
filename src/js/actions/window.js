export const SHOW_WINDOW = 'SHOW_WINDOW'
export const HIDE_WINDOW = 'HIDE_WINDOW'
export const TOGGLE_WINDOW = 'TOGGLE_WINDOW'

export function toggle () {
  chrome.runtime.sendMessage({ type: 'getTabs' })
  return { type: TOGGLE_WINDOW }
}

export function hide () {
  return { type: HIDE_WINDOW }
}
