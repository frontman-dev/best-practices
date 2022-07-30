import React from "react"
import { storiesOf } from "@storybook/react"
import { Code } from "./code"

const stories = storiesOf("Code", module)

stories.add("Code", () => <Code>{"function() { console.log('Code component') }"}</Code>)
