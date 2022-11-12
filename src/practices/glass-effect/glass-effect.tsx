import React from "react"
import styles from "./glass-effect.css"

export function GlassEffect() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundBlock} />
      <div className={styles.backgroundBlock} />
      <div className={styles.backgroundBlock} />
      <div className={styles.card} />
    </div>
  )
}
