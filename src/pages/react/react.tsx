import React from "react"
import { Card } from "~/components/card/card"
import { Cards } from "~/components/cards/cards"
import { Routes } from "~/core/routes"
import styles from "./react.css"

export function ReactPage() {
  return (
    <div className={styles.container}>
      <Cards>
        <Card to={Routes.TenHocs}>10 good HOCS</Card>
      </Cards>
    </div>
  )
}
