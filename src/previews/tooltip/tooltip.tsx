import React from "react"
import styles from "./tooltip.css"

export function Tooltip_Preview() {
  return (
    <div data-label="Centered tooltip" className={styles.tooltip}>
      <button>Button</button>
    </div>
  )
}
