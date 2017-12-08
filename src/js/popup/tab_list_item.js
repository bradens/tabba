import React from 'react'
import styles from 'styles/tab.css'
import classnames from 'classnames/bind'

let cx = classnames.bind(styles)

class TabListItem extends React.Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.selected) {
      this._node.scrollIntoViewIfNeeded()
    }
  }

  render () {
    let { tab, selected, active, onClick } = this.props
    return (
      <li ref={ n => this._node = n } onClick={() => onClick(tab.id)} className={cx({ tab: true, active: tab.active, selected })}>
        <img className={styles.favicon} src={tab.favIconUrl} />
        <span className={styles.url}>{ (new URL(tab.url)).hostname }</span>
        <span>{ tab.title }</span>
      </li>
    )
  }
}

export default TabListItem
