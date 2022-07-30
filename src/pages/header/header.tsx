import React from "react"
import { Github } from "~/components/github/github"
import styles from "./header.css"

export function Header() {
  return (
    <div className={styles.header}>
      frontman.dev
      <Github />
    </div>
  )
}
