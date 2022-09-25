import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import { NavLink } from "./navlink"
import { MarkupIcon } from "~/pages/menu/icons/markup"

const stories = storiesOf("NavLink", module)

stories.add("Section", () => <NavLink to="" children="Markup" active={boolean("active", false)} Icon={MarkupIcon} />)
stories.add("Page", () => <NavLink to="" children="Flexbox" active={boolean("active", false)} />)
