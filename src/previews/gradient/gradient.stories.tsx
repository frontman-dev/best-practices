import React from "react"
import { storiesOf } from "@storybook/react"
import { Gradient_Preview } from "./gradient"

const stories = storiesOf("previews/gradient", module)

stories.add("Gradient", () => <Gradient_Preview />)
