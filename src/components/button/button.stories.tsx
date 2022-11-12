import React from "react"
import { storiesOf } from "@storybook/react"
import githubIcon from "~/assets/icons/github.svg"
import { Button } from "./button"
import { Image } from "../image/image"
import { select } from "@storybook/addon-knobs"

const stories = storiesOf("Button", module)

stories.add("Base", () => (
  <Button
    design={select("Design", ["primary", "secondary", "ghost"], "primary")}
    size={select("Size", ["sm", "md", "lg"], "md")}
    children="Button"
  />
))
stories.add("With left", () => (
  <Button
    design={select("Design", ["primary", "secondary", "ghost"], "primary")}
    size={select("Size", ["sm", "md", "lg"], "md")}
    left={<Image src={githubIcon} />}
    children="GitHub"
  />
))
