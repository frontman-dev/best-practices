import React from "react"
import { Card } from "~/components/card/card"
import { Grid } from "~/components/grid/grid"
import { Routes } from "~/core/routes"
import styles from "./react.css"

export function ReactPage() {
  return (
    <div className={styles.container}>
      <Grid>
        <Card to={Routes.TenHocs}>10 good HOCS</Card>
      </Grid>
    </div>
  )
}
