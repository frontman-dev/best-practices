import React from "react"
import { storiesOf } from "@storybook/react"
import { Tooltip_Preview } from "./tooltip"

const stories = storiesOf("previews/tooltip", module)

stories.add("Tooltip", () => (
  <div style={{ width: "400px", height: "400px", padding: "50px" }}>
    <Tooltip_Preview />
  </div>
))
