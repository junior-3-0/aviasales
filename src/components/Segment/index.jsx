import React from 'react'

import styles from './segments.module.scss'

function Segments({ origin, destination, date, duration, stops }) {
  let stop = 'Без пересадок'
  if (stops.length) {
    stop = stops.length === 1 ? '1 пересадка' : `${stops.length} пересадки`
  }
  const travelTime = `${Math.floor(duration / 60)}ч ${duration % 60}м`
  const departureTime = new Date(date).toTimeString().replace(/:[0-9]{2,2} .*/, '')
  const d = new Date(date)
  const arrivalTime = new Date(d.setMinutes(d.getMinutes() + duration)).toTimeString().replace(/:[0-9]{2,2} .*/, '')

  return (
    <>
      <div className={styles.cell}>
        <div className={styles.descr}>
          {origin} – {destination}
        </div>
        <div className={styles.text}>
          {departureTime} – {arrivalTime}
        </div>
      </div>
      <div className={styles.cell}>
        <div className={styles.descr}>В пути</div>
        <div className={styles.text}>{travelTime}</div>
      </div>
      <div className={styles.cell}>
        <div className={styles.descr}>{stop}</div>
        <div className={styles.text}>{stops.join(', ')}</div>
      </div>
    </>
  )
}

export default Segments
