import React from "react"
import styles from "./code.css"
import Highlight from "react-highlight"

export type CodeProps = {
  children: React.ReactNode
}

export function Code({ children }: CodeProps) {
  return <Highlight className={styles.code}>{children}</Highlight>
}
