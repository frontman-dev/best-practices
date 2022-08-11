import React from "react"
import { storiesOf } from "@storybook/react"
import { GradientText } from "./gradient-text"

const stories = storiesOf("css/gradient", module)

stories.add("GradientText", () => <GradientText />)
