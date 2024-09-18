import React from 'react'

import Logo from '../Logo'
import Button from '../Button'
import TransferFilter from '../TransferFilter'
import SortPanel from '../SortPanel'
import TicketList from '../TicketList'

import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.wrapper}>
        <TransferFilter />
        <div className={styles.inner}>
          <SortPanel />
          <TicketList />
          <Button />
        </div>
      </div>
    </div>
  )
}

export default App
