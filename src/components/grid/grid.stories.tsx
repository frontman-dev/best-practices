import React from "react"
import { storiesOf } from "@storybook/react"
import { Card } from "~/components/card/card"
import { Grid } from "./grid"

const stories = storiesOf("Grid", module)

stories.add("Grid", () => (
  <Grid>
    <Card children={"Card"} />
    <Card children={"Card"} />
    <Card children={"Card"} />
    <Card children={"Card"} />
  </Grid>
))
