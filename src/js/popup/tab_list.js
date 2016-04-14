import React from 'react'
import TabListItem from './tab_list_item'
import { connect } from 'react-redux'
import { selectTab } from 'actions/tab'

const Tablist = ({ tabs, selected, selectTab }) => {
  return (
    <div className='tab-list'>
      { tabs.map(t => <TabListItem onClick={selectTab} key={t.id} tab={t} selected={selected && t.id === selected.id} /> ) }
    </div>
  )
}

export default connect(
  ({ tab: { tabs, filtered, query, selected }}, props) => ({
    tabs: query ? filtered : tabs,
    selected,
  }),
  { selectTab }
)(Tablist)
