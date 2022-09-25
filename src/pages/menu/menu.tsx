import React from "react"
import styles from "./menu.css"
import { NavLink } from "~/components/navlink/navlink"
import { Routes } from "~/core/routes"
import { Section } from "./section/section"
import { useLocation } from "react-router-dom"

// @todo: navigation hook
export function Menu() {
  const { pathname } = useLocation()

  return (
    <div className={styles.container}>
      <Section section={Routes.Markup} active={pathname.startsWith(Routes.Markup)}>
        <NavLink to={Routes.Gradient} active={pathname === Routes.Gradient} children="Gradient" />
        <NavLink to={Routes.GradientText} active={pathname === Routes.GradientText} children="Gradient text" />
        <NavLink to={Routes.TruncatedText} active={pathname === Routes.TruncatedText} children="Truncated text" />
      </Section>
      <Section section={Routes.React} active={pathname.startsWith(Routes.React)}>
        <NavLink to={Routes.TenHocs} active={pathname === Routes.TenHocs} children="10 HOCs" />
      </Section>
      <Section section={Routes.Performance} active={pathname.startsWith(Routes.Performance)}>
        <NavLink to={Routes.MemoryLeak} active={pathname === Routes.MemoryLeak} children="Memory leak" />
      </Section>
    </div>
  )
}
