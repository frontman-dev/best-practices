import React from "react"
import styles from "./toggle.css"

export function Toggle() {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" />
    </div>
  )
}
