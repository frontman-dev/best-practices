import React from "react"
import { storiesOf } from "@storybook/react"
import { Toggle } from "./toggle"

const stories = storiesOf("css/toggle", module)

stories.add("Toggle", () => <Toggle />)
