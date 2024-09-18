import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '../Checkbox'
import * as actions from '../../action'

import styles from './transferFilter.module.scss'

function TransferFilter({ allTransfer, notTransfer, oneTransfer, twoTransfer, threeTransfer, changeBox }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Количество пересадок</h2>
      <Checkbox description="Все" name="allTransfer" action={changeBox} check={allTransfer} />
      <Checkbox description="Без пересадок" name="notTransfer" action={changeBox} check={notTransfer} />
      <Checkbox description="1 пересадка" name="oneTransfer" action={changeBox} check={oneTransfer} />
      <Checkbox description="2 пересадка" name="twoTransfer" action={changeBox} check={twoTransfer} />
      <Checkbox description="3 пересадка" name="threeTransfer" action={changeBox} check={threeTransfer} />
    </div>
  )
}

const mapStateToProps = (state) => state.checked

export default connect(mapStateToProps, actions)(TransferFilter)
