import React from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'

import * as actions from '../../action'

import styles from './sortPanel.module.scss'

function SortPanel({ tabs, sort }) {
  return (
    <div className={styles.sort}>
      <button
        className={cn(styles.tab, styles.left, {
          [styles.active]: tabs,
        })}
        type="button"
        onClick={() => sort(true)}
      >
        Самый дешевый
      </button>
      <button
        className={cn(styles.tab, styles.right, {
          [styles.active]: !tabs,
        })}
        type="button"
        onClick={() => sort(false)}
      >
        Самый быстрый
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({ tabs: state.sort })

export default connect(mapStateToProps, actions)(SortPanel)
