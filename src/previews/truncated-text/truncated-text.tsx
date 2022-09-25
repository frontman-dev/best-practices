import React from "react"
import styles from "./truncated-text.css"

export function TruncatedText_Preview() {
  return <p className={styles.text} children="Long text that doesn't fit a container" />
}
