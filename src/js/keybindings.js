import 'app/img/icon-128.png'
import Keyboard from 'keyboardjs'
import { toggle, hide } from 'actions/window'

export function init ({ dispatch }) {
  Keyboard.bind('ctrl + .', () => dispatch(toggle()))
  Keyboard.bind('esc', () => dispatch(hide()))
}
