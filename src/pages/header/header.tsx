import React from "react"
import { Github } from "~/components/github/github"
import { Logo } from "~/components/logo/logo"
import styles from "./header.css"

export function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Github />
    </div>
  )
}
