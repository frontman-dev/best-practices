import React from "react"
import styles from "./truncated-text.css"

export function TruncatedText() {
  return <p className={styles.text} children="Some long text that doesn't fit a container" />
}
