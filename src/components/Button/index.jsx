import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../action'

import styles from './button.module.scss'

function Button({ change }) {
  return (
    <button onClick={() => change()} className={styles.button} type="button" aria-label="Show 5 more tickets">
      Показать еще 5 билетов!
    </button>
  )
}

const mapStateToProps = (state) => ({ count: state.count })

export default connect(mapStateToProps, actions)(Button)
