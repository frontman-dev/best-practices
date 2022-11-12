import React from "react"
import { Card } from "~/components/card/card"
import { Cards } from "~/components/cards/cards"
import { Routes } from "~/core/routes"
import styles from "./interview.css"

export function InterviewPage() {
  return (
    <div className={styles.container}>
      <Cards>
        <Card to={Routes.GetMiddleCharacter} result={<></>} caption="Get middle character" />
        <Card to={Routes.FetchWithRetries} result={<></>} caption="Fetch with retries" />
      </Cards>
    </div>
  )
}
