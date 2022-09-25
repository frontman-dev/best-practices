import React from "react"
import { storiesOf } from "@storybook/react"
import { Card } from "./card"

const stories = storiesOf("Card", module)

const EMPTY = ""

stories.add("Card", () => <Card to={EMPTY} result={<></>} caption="Card" />)
