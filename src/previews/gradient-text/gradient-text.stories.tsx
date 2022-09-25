import React from "react"
import { storiesOf } from "@storybook/react"
import { GradientText_Preview } from "./gradient-text"

const stories = storiesOf("previews/gradient", module)

stories.add("GradientText", () => <GradientText_Preview />)
