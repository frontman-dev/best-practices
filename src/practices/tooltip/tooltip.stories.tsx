import React from "react"
import { storiesOf } from "@storybook/react"
import { Tooltip } from "./tooltip"

const stories = storiesOf("css/tooltip", module)

stories.add("Tooltip", () => (
  <div style={{ width: "400px", height: "400px", padding: "50px" }}>
    <Tooltip label="Centered tooltip">
      <button>Button</button>
    </Tooltip>
  </div>
))
