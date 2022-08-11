import React from "react"
import { NavLink } from "~/components/navlink/navlink"
import { Routes } from "~/core/routes"

// @todo: navigation hook
export function Menu() {
  return (
    <>
      <NavLink to={Routes.Markup} children="CSS" />
      <NavLink to={Routes.React} children="React" />
    </>
  )
}
