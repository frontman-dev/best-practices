import React from "react"
import { storiesOf } from "@storybook/react"
import githubIcon from "~/assets/icons/github.svg"
import { Button } from "./button"
import { Image } from "../image/image"

const stories = storiesOf("Button", module)

stories.add("Ghost", () => <Button children="Button" />)
stories.add("Ghost with left", () => <Button left={<Image src={githubIcon} />} children="GitHub" />)
