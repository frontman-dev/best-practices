import React from "react"
import { storiesOf } from "@storybook/react"
import { NavLink } from "./navlink"

const stories = storiesOf("NavLink", module)

stories.add("NavLink", () => <NavLink children="Markup" />)
