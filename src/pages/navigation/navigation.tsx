import React from "react"
import { NavLink } from "~/components/navlink/navlink"
import { Routes } from "~/core/routes"
import styles from "./navigation.css"

export function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavLink to={Routes.Markup} children="CSS" />
      <NavLink to={Routes.React} children="React" />
    </div>
  )
}
