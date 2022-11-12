import React from "react"
import { storiesOf } from "@storybook/react"
import { TextScrollAnimation } from "./text-scroll-animation"

const stories = storiesOf("css/text-scroll-animation", module)

stories.add("Text scroll animation", () => <TextScrollAnimation />)
