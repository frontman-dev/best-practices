import React from "react"
import { Card } from "~/components/card/card"
import { Cards } from "~/components/cards/cards"
import { Routes } from "~/core/routes"
import styles from "./performance.css"

export function PerformancePage() {
  return (
    <div className={styles.container}>
      <Cards>
        <Card to={Routes.MemoryLeak} result={<></>} caption="Memory leak" />
      </Cards>
    </div>
  )
}
