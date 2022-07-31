import React, { useCallback } from "react"
import { LinkProps, useNavigate } from "react-router-dom"
import styles from "./card.css"

export type CardProps = Pick<LinkProps, "to"> & {
  children: React.ReactNode
}

export function Card({ to, children }: CardProps) {
  const navigate = useNavigate()
  const onClick = useCallback(() => navigate(to), [navigate])

  return (
    <div onClick={onClick} className={styles.card}>
      {children}
    </div>
  )
}
