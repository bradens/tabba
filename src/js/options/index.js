import React from 'react'
import KeybindingsForm from './keybindings'
import styles from "styles/options.css"
import conditionalRender from 'js/conditional_render'
import { compose } from 'recompose'
import { saveOptions } from 'actions/option'
import { connect } from 'react-redux'

const Options = (props) => {
  const submit = (options) => {
    props.saveOptions(options)
  }

  return (
    <div className={styles.options}>
      <KeybindingsForm onSubmit={submit} />
    </div>
  )
}

export default compose(
  connect(
    (state, props) => ({ options: state.option.options, loaded: !state.option.loadingOptions }),
    { saveOptions }
  ),
  conditionalRender(props => props.loaded)
)(Options)
