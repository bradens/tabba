import 'app/img/icon-128.png'
import Keyboard from 'keyboardjs'
import { toggle as doToggle, hide as doHide } from 'actions/window'

export function init ({ dispatch, getState }) {
  let {
    toggle,
    hide
  } = getState().option.options

  let sep = ' + '
  Keyboard.bind(toggle.join(sep), () => dispatch(doToggle()))
  Keyboard.bind(hide.join(sep), () => dispatch(doHide()))
}
