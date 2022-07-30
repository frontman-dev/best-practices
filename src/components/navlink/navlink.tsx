import React from "react"
import { Link, LinkProps } from "react-router-dom"
import styles from "./navlink.css"

export type NavLinkProps = Pick<LinkProps, "to"> & {
  children: React.ReactNode
}

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <Link className={styles.link} {...rest}>
      {children}
    </Link>
  )
}
