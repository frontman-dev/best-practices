import React from "react"
import { Card } from "~/components/card/card"
import { Grid } from "~/components/grid/grid"
import { Routes } from "~/core/routes"
import styles from "./markup.css"

export function MarkupPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card to={Routes.Gradient}>Gradient</Card>
        <Card to={Routes.GradientText}>Gradient text</Card>
      </div>
    </div>
  )
}
