import React from "react"
import { Link, LinkProps } from "react-router-dom"
import cn from "classnames"
import styles from "./navlink.css"

export type NavLinkDesign = "section" | "page"

export type NavLinkProps = Pick<LinkProps, "to"> & {
  children: string
  design?: NavLinkDesign
  active?: boolean
  Icon?: any
}

export function NavLink({ children, design = "page", active = false, Icon, ...rest }: NavLinkProps) {
  return (
    <Link
      className={cn(styles.link, {
        [styles["section-active"]]: design === "section" && active,
        [styles.page]: design === "page",
        [styles["page-active"]]: design === "page" && active,
      })}
      {...rest}
    >
      {Icon && (
        <div className={styles.icon}>
          <Icon color={active ? "#1B1A20" : "#1B1A2080"} />
        </div>
      )}
      {children}
    </Link>
  )
}
