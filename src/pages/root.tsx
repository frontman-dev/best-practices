import React from "react"
import styles from "./root.css"
import { Header } from "./header/header"
import { Navigation } from "./navigation/navigation"
import { MarkupPage } from "./markup/markup"
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom"
import { Routes } from "~/core/routes"
import { ReactPage } from "./react/react"

export function Root() {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <Navigation />
        <div className={styles.page}>
          <RouterRoutes>
            <Route path={Routes.Markup} element={<MarkupPage />} />
            <Route path={Routes.React} element={<ReactPage />} />
            <Route path={Routes.Index} element={<Navigate to={Routes.Markup} />} />
          </RouterRoutes>
        </div>
      </div>
    </div>
  )
}
