import React from "react"
import { storiesOf } from "@storybook/react"
import { WordChanger } from "./word-changer"

const stories = storiesOf("css/word-changer", module)

stories.add("Word changer", () => <WordChanger words={["JavaScript", "Python", "Haskell", "Golang", "Java"]} />)
