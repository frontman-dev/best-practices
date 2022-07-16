import React from "react"
import styles from "./card.css"

export type CardProps = {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>
}
