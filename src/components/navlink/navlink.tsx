import React from "react"
import styles from "./navlink.css"

export type NavLinkProps = {
  children: React.ReactNode
}

export function NavLink({ children }: NavLinkProps) {
  return <div className={styles.link}>{children}</div>
}
