import React from "react"
import styles from "./tooltip.css"

export type TooltipProps = {
  label: string
  children: React.ReactNode
}

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <div data-label={label} className={styles.tooltip}>
      {children}
    </div>
  )
}
