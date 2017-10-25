import React from 'react'
import { Field } from 'redux-form'

const KeybindField = (props) => {
  const onKeyPress = ev => {
    console.log("[KeybindField] onKeyPress", ev)
  }

  const onKeyUp = ev => {
    console.log("[KeybindField] onKeyUp", ev)
  }

  return (
    <Field name={props.name} component={fieldProps => {
      { console.log("fieldProps", fieldProps) }
      return <input
        type='text'
        placeholder='Enter key combination'
        value={fieldProps.input.value}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp} />
    }} />
  )
}

export default KeybindField
