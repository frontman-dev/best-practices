import React from "react"
import { NavLink } from "~/components/navlink/navlink"
import styles from "./navigation.css"

export function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavLink children="Markup" />
      <NavLink children="React" />
    </div>
  )
}
