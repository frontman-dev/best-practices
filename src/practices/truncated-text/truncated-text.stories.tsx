import React from "react"
import { storiesOf } from "@storybook/react"
import { TruncatedText } from "./truncated-text"

const stories = storiesOf("css/text", module)

stories.add("Truncated text", () => <TruncatedText />)
