import React from "react"
import { storiesOf } from "@storybook/react"
import { Card } from "~/components/card/card"
import { Grid } from "./grid"

const stories = storiesOf("Grid", module)

const EMPTY = ""

stories.add("Grid", () => (
  <Grid>
    <Card to={EMPTY} result={<></>} caption={"Card"} />
    <Card to={EMPTY} result={<></>} caption={"Card"} />
    <Card to={EMPTY} result={<></>} caption={"Card"} />
    <Card to={EMPTY} result={<></>} caption={"Card"} />
  </Grid>
))
