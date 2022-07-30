import React from "react"
import styles from "./root.css"
import { Header } from "./header/header"
import { Navigation } from "./navigation/navigation"
import { MarkupPage } from "./markup/markup"

export function Root() {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <Navigation />
        <div className={styles.page}>
          <MarkupPage />
        </div>
      </div>
    </div>
  )
}
