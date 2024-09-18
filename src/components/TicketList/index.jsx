import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../action'
import Ticket from '../Ticket'
import SpinerLoader from '../SpinerLoader'

import compare from './compare'
import styles from './ticketList.module.scss'

function TicketList({ getTocken, getTickets, state }) {
  const {
    search,
    tickets: { tickets, stop },
    sort,
    checked,
    count,
  } = state
  const { notTransfer, oneTransfer, twoTransfer, threeTransfer } = checked

  const no = notTransfer ? 0 : false
  const one = oneTransfer ? 1 : false
  const two = twoTransfer ? 2 : false
  const three = threeTransfer ? 3 : false

  let resultlist = compare(tickets, no, one, two, three)
  const { length } = resultlist

  if (length >= count) {
    resultlist = resultlist.slice(count - 5, count)
  } else {
    resultlist = resultlist.slice(length - 5, length)
  }

  resultlist.sort((a, b) => a.price - b.price)
  if (!sort) {
    resultlist.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    )
  }

  useEffect(() => {
    getTocken()
  }, [])

  useEffect(() => {
    if (search) {
      getTickets(search)
    }
  }, [search])

  return (
    <div className={styles.list}>
      {!stop && <SpinerLoader />}
      {!length && <div className={styles.error}>Рейсов, подходящих под заданные фильтры, не найдено</div>}
      {resultlist.map((ticket) => (
        <Ticket key={ticket.price * Math.random()} {...ticket} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps, actions)(TicketList)
