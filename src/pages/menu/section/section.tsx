import React from "react"
import styles from "./section.css"
import { NavLink } from "~/components/navlink/navlink"
import { Routes } from "~/core/routes"
import { MarkupIcon } from "../icons/markup"
import { ReactIcon } from "../icons/react"
import { PerformanceIcon } from "../icons/performance"
import { InterviewIcon } from "../icons/interview"

export type SectionProps = {
  children: React.ReactNode | React.ReactNode[]
  section: Routes
  active: boolean
}

export function Section({ section, active, children }: SectionProps) {
  const [name, Icon] = getNameAndIconBySection(section)

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <NavLink to={section} design="section" active={active} Icon={Icon} children={name} />
      </div>
      {children}
    </div>
  )
}

function getNameAndIconBySection(section: Routes): [string, any] {
  if (section === Routes.Markup) {
    return ["CSS", MarkupIcon]
  }
  if (section === Routes.React) {
    return ["React", ReactIcon]
  }
  if (section === Routes.Performance) {
    return ["Performance", PerformanceIcon]
  }
  if (section === Routes.Interview) {
    return ["Interview", InterviewIcon]
  }
  return ["", null]
}
