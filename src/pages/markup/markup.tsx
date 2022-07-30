import React from "react"
import { Card } from "~/components/card/card"
import { Grid } from "~/components/grid/grid"
import styles from "./markup.css"

export function MarkupPage() {
  return (
    <div className={styles.container}>
      <Grid>
        <Card>Gradient</Card>
        <Card>Gradient text</Card>
      </Grid>
    </div>
  )
}
