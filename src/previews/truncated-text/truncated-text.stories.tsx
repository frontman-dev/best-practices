import React from "react"
import { storiesOf } from "@storybook/react"
import { TruncatedText_Preview } from "./truncated-text"

const stories = storiesOf("previews/text", module)

stories.add("Truncated text", () => <TruncatedText_Preview />)
