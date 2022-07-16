import React from "react"
import { storiesOf } from "@storybook/react"
import { Card } from "./card"

const stories = storiesOf("Card", module)

stories.add("Card", () => <Card>Card</Card>)
