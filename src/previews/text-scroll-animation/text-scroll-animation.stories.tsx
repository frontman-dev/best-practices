import React from "react"
import { storiesOf } from "@storybook/react"
import { TextScrollAnimation_Preview } from "./text-scroll-animation"

const stories = storiesOf("previews/text-scroll-animation", module)

stories.add("Text scroll animation", () => <TextScrollAnimation_Preview />)
