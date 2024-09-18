import React from 'react'

import styles from './checkbox.module.scss'

function Checkbox({ description, name, action, check }) {
  return (
    <label className={styles.label} htmlFor={name}>
      <input
        className={styles.real}
        type="checkbox"
        name={name}
        id={name}
        checked={check}
        onChange={() => action(name)}
      />
      <span className={styles.custom} />
      {description}
    </label>
  )
}

export default Checkbox
