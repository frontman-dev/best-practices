import React, { useCallback } from "react"
import { LinkProps, useNavigate } from "react-router-dom"
import styles from "./card.css"

export type CardProps = Pick<LinkProps, "to"> & {
  result: React.ReactNode
  caption: string
}

export function Card({ to, result, caption }: CardProps) {
  const navigate = useNavigate()
  const onClick = useCallback(() => navigate(to), [navigate])

  return (
    <div className={styles.card} onClick={onClick}>
      {result && <div className={styles.result}>{result}</div>}
      <div className={styles.caption}>{caption}</div>
    </div>
  )
}
