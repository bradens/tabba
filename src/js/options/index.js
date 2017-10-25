import React from 'react'
import KeybindingsForm from './keybindings'
import styles from "styles/options.css"

const Options = (props) => {
  const submit = (vals) => {
    console.log("Submitting", vals)
  }

  return (
    <div className={styles.options}>
      <KeybindingsForm onSubmit={submit} />
    </div>
  )
}

export default Options
