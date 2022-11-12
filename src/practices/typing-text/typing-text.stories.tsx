import React from "react"
import { storiesOf } from "@storybook/react"
import { TypingText } from "./typing-text"

const stories = storiesOf("css/typing-text", module)

stories.add("Typing text", () => <TypingText />)
