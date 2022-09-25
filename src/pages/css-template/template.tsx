import React from "react"
import { Code } from "~/components/code/code"
import styles from "./template.css"

export type CssPageProps = {
  title: string
  description?: string
  code: string
  block: React.ReactNode
}

// @todo: add Next and Previous buttons
export function CssPage({ title, description, code, block }: CssPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}></div>}
      <div className={styles.code}>
        <Code>{code}</Code>
      </div>
      <div className={styles.block}>{block}</div>
    </div>
  )
}
