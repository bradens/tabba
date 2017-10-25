import React from 'react'
import { Field } from 'redux-form'

const generateInput = fieldProps => {
  return (
    <input
      onKeyDown={e => fieldProps.onKeyDown(e, fieldProps)}
      onChange={v => fieldProps.input.onChange(v)}
      type='text'
      placeholder='Enter key combination'
      value={fieldProps.input.value.join(" + ")} />
  )
}

const getKeyCombination = (ev) => {
  let combo = []
  const combine = key => combo = combo.concat(key)
  if (ev.metaKey)
    combine("command")
  if (ev.ctrlKey)
    combine("ctrl")
  if (ev.altKey)
    combine("alt")
  if (ev.shiftKey)
    combine("shift")

  if (['Control', 'Alt', 'Meta', 'Shift'].indexOf(ev.key) === -1)
    return combine(ev.key)
  else
    return combo
}

class KeybindField extends React.Component {
  onKeyDown = (ev, props) => {
    let combo = getKeyCombination(ev)
    props.input.onChange(combo)
  }

  render() {
    return (
      <Field onKeyDown={this.onKeyDown} defaultValue={[]} name={this.props.name} component={generateInput} />
    )
  }
}

export default KeybindField
