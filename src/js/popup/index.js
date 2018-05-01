import MainStyle from 'styles/main.css'
import React from 'react'
import classnames from 'classnames/bind'
import Tablist from './tab_list'
import Search from './search'
import {
  query,
  selectTab,
  selectDown,
  selectUp,
  closeSelected
} from 'actions/tab'
import { connect } from 'react-redux'

const cx = classnames.bind(MainStyle)

const Main = ({ query, currentQuery, selected, selectTab, selectDown, selectUp, closeSelected, options }) => {
  let commands = {
    'next': selectDown,
    'previous': selectUp,
    'close': closeSelected,
    'select': selectTab
  }

  const onKeyDown = (ev) => {
    const matches = (command) => {
      let sequence = options[command]
      for (let key of sequence) {
        switch (key) {
          case 'ctrl':
            if (!ev.ctrlKey) return false
            break
          case 'command':
            if (!ev.metaKey) return false
            break
          case 'shift':
            if (!ev.shiftKey) return false
            break
          case 'alt':
            if (!ev.altKey) return false
            break
          default:
            if (ev.key !== key) return false
            break
        }
      }
      return true
    }

    for (let key of Object.keys(commands)) {
      if (matches(key)) {
        commands[key](selected.id)
        ev.stopPropagation()
        ev.preventDefault()
      }
    }
  }

  const onKeyUp = (ev) => {
    let val = ev.target.value.toLowerCase()
    if (val !== currentQuery)
      query(val)
  }

  return (
    <div className={cx({ main: true })}>
      <div>
        <Search onKeyUp={onKeyUp} onKeyDown={onKeyDown} />
        <Tablist />
      </div>
    </div>
  )
}

export default connect(
  state => ({
    selected: state.tab.selected,
    currentQuery: state.tab.query,
    options: state.option.options,
  }),
  { query, selectTab, selectDown, selectUp, closeSelected }
)(Main)
