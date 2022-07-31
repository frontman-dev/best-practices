import React from "react"
import { storiesOf } from "@storybook/react"
import { Gradient } from "./gradient"

const stories = storiesOf("css/gradient", module)

stories.add("Gradient", () => <Gradient />)
