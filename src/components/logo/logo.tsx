import React from "react"
import { Link } from "react-router-dom"
import { Routes } from "~/core/routes"
import styles from "./logo.css"

export type LogoProps = {}

export function Logo() {
  return (
    <Link to={Routes.Index} className={styles.logo}>
      frontman.dev
    </Link>
  )
}
