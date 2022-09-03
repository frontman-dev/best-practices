import React from "react"
import { Card } from "~/components/card/card"
import { Cards } from "~/components/cards/cards"
import { Routes } from "~/core/routes"
import styles from "./markup.css"

export function MarkupPage() {
  return (
    <div className={styles.container}>
      <Cards>
        <Card to={Routes.Gradient}>Gradient</Card>
        <Card to={Routes.GradientText}>Gradient text</Card>
      </Cards>
    </div>
  )
}
