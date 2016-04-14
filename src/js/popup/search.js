import React from 'react'
import styles from 'styles/search.css'

const Search = ({ onKeyUp, value, onKeyDown }) => {
  return (
    <div>
      <input
        ref={input => input && input.focus()}
        placeholder="Type to filter..."
        className={styles.input}
        autoFocus
        type='text'
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown} />
    </div>
  )
}

export default Search
