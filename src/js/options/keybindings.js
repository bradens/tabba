import React from 'react'
import KeybindField from '../keybind_field'
import { Field, reduxForm } from 'redux-form'

let KeybindingsForm = ({ handleSubmit }) => {
  return (
    <div className='options__key-bindings'>
      <h2>Key bindings</h2>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="toggle">Toggle Tabzy</label>
          <KeybindField name="toggle" />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

KeybindingsForm = reduxForm({
  form: 'options'
})(KeybindingsForm)

export default KeybindingsForm
