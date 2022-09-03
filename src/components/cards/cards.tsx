import React from "react"
import styles from "./cards.css"

export type CardsProps = {
  children: React.ReactNode
}

export function Cards({ children }: CardsProps) {
  return <div className={styles.cards}>{children}</div>
}
