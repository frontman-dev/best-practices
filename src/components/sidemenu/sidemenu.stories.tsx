import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { SideMenu } from "./sidemenu"
import { NavLink } from "../navlink/navlink"

const stories = storiesOf("SideMenu", module)

stories.add("SideMenu", () => <Story />)

function Story() {
  const [show, setShow] = useState(false)

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <button onClick={() => setShow(true)} children="Show menu" />
      <SideMenu show={show} onClose={() => setShow(false)}>
        <NavLink to="">CSS</NavLink>
        <NavLink to="">React</NavLink>
      </SideMenu>
    </div>
  )
}
