import React from "react"
import { Card } from "~/components/card/card"
import { Grid } from "~/components/grid/grid"
import styles from "./react.css"

export function ReactPage() {
  return (
    <div className={styles.container}>
      <Grid>
        <Card>10 good HOCS</Card>
      </Grid>
    </div>
  )
}
