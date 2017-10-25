import MainStyle from 'styles/content_script.css'
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

let cx = classnames.bind(MainStyle)

const Main = ({ shown, query, currentQuery, selected, selectTab, selectDown, selectUp, closeSelected, options }) => {
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

    if (matches('next')) {
      selectDown()
      ev.stopPropagation()
    } else if (matches('previous')) {
      selectUp()
      ev.stopPropagation()
    } else if (matches('close')) {
      closeSelected(selected.id)
      ev.stopPropagation()
    } else if (ev.nativeEvent.key === 'Enter') {
      selectTab(selected.id)
      ev.stopPropagation()
    }
  }

  const onKeyUp = (ev) => {
    if (ev.target.value !== currentQuery)
      query(ev.target.value.toLowerCase())
    }

  return (
    <div className={cx({ backdrop: true, shown })}>
      <div className={cx({ main: true, shown })}>
        <div className={MainStyle.innerWrap}>
          { shown && <Search onKeyUp={onKeyUp} onKeyDown={onKeyDown} /> }
          <Tablist />
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    shown: state.window.shown,
    selected: state.tab.selected,
    currentQuery: state.tab.query,
    options: state.option.options,
  }),
  { query, selectTab, selectDown, selectUp, closeSelected }
)(Main)
