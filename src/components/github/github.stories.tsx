import React from "react"
import { storiesOf } from "@storybook/react"
import { Github } from "./github"

const stories = storiesOf("Github", module)

stories.add("Github", () => <Github />)
