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

const Main = ({ shown, query, currentQuery, selected, selectTab, selectDown, selectUp, closeSelected }) => {
  const onKeyDown = (ev) => {
    if (ev.ctrlKey && ev.nativeEvent.key === 'n') {
      selectDown()
      ev.stopPropagation()
    } else if (ev.ctrlKey && ev.nativeEvent.key === 'p') {
      selectUp()
      ev.stopPropagation()
    } else if (ev.ctrlKey && ev.nativeEvent.key === 'q') {
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
  state => ({ shown: state.window.shown, selected: state.tab.selected, currentQuery: state.tab.query }),
  { query, selectTab, selectDown, selectUp, closeSelected }
)(Main)
