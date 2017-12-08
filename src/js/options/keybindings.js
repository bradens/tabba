import React from 'react'
import { connect } from 'react-redux'
import KeybindField from '../keybind_field'
import { Field, reduxForm } from 'redux-form'

let KeybindingsForm = ({ handleSubmit }) => {
  return (
    <div className='options__key-bindings'>
      <h2>Key bindings</h2>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="select">Select</label>
          <KeybindField name="select" />
        </div>
        <div>
          <label htmlFor="hide">Hide</label>
          <KeybindField name="hide" />
        </div>
        <div>
          <label htmlFor="next">Next</label>
          <KeybindField name="next" />
        </div>
        <div>
          <label htmlFor="previous">Previous</label>
          <KeybindField name="previous" />
        </div>
        <div>
          <label htmlFor="close">Close Tab</label>
          <KeybindField name="close" />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

KeybindingsForm = reduxForm({
  form: 'options',
})(KeybindingsForm)

export default connect(
  (state, props) => {
    return {
      initialValues: { ...state.option.options }
    }
  }
)(KeybindingsForm)
