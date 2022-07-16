import React from "react"
import styles from "./grid.css"

export type GridProps = {
  children: React.ReactNode
}

export function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>
}
