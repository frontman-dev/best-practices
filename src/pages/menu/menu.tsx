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
        <NavLink to={Routes.Toggle} active={pathname === Routes.Toggle} children="Toggle" />
        <NavLink to={Routes.Tooltip} active={pathname === Routes.Tooltip} children="Tooltip" />
        <NavLink
          to={Routes.TextScrollAnimation}
          active={pathname === Routes.TextScrollAnimation}
          children="Text scroll animation"
        />
        <NavLink
          to={Routes.WordChangeInPhrase}
          active={pathname === Routes.WordChangeInPhrase}
          children="Word change in phrase"
        />
        <NavLink to={Routes.TypingText} active={pathname === Routes.TypingText} children="Typing text" />
        <NavLink to={Routes.GlassEffect} active={pathname === Routes.GlassEffect} children="Glass effect" />
      </Section>
      {/* <Section section={Routes.React} active={pathname.startsWith(Routes.React)}></Section> */}
      {/* <Section section={Routes.Performance} active={pathname.startsWith(Routes.Performance)}></Section> */}
      <Section section={Routes.Interview} active={pathname.startsWith(Routes.Interview)}>
        <NavLink
          to={Routes.FetchWithRetries}
          active={pathname === Routes.FetchWithRetries}
          children="Fetch with retries"
        />
        <NavLink
          to={Routes.GetMiddleCharacter}
          active={pathname === Routes.GetMiddleCharacter}
          children="Get middle character"
        />
      </Section>
    </div>
  )
}
