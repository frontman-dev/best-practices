import React from "react"
import { Menu } from "../menu/menu"
import styles from "./navigation.css"

export function Navigation() {
  return (
    <div className={styles.navigation}>
      <Menu />
    </div>
  )
}
