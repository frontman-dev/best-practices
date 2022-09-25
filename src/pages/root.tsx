import React, { useCallback, useState } from "react"
import styles from "./root.css"
import { Header } from "./header/header"
import { Navigation } from "./navigation/navigation"
import { MarkupPage } from "./markup/markup"
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom"
import { Routes } from "~/core/routes"
import { ReactPage } from "./react/react"
import { GradientPage } from "./gradient/page"
import { GradientTextPage } from "./gradient-text/page"
import { SideMenu } from "~/components/sidemenu/sidemenu"
import { Menu } from "./menu/menu"
import { PerformancePage } from "./performance/performance"
import { MemoryLeakPage } from "./memory-leak/page"
import { TruncatedTextPage } from "./truncated-text/page"
import { TenHocsPage } from "./ten-hocs/page"

export function Root() {
  const [showMenu, setShowMenu] = useState(false)
  const onMenuTrigger = useCallback(() => setShowMenu(shown => !shown), [setShowMenu])

  return (
    <div className={styles.root}>
      <Header onMenuClick={onMenuTrigger} />
      <div className={styles.container}>
        <Navigation />
        <div className={styles.page}>
          <RouterRoutes>
            <Route path={Routes.Markup} element={<MarkupPage />} />
            <Route path={Routes.Gradient} element={<GradientPage />} />
            <Route path={Routes.GradientText} element={<GradientTextPage />} />
            <Route path={Routes.TruncatedText} element={<TruncatedTextPage />} />
            <Route path={Routes.React} element={<ReactPage />} />
            <Route path={Routes.Index} element={<Navigate to={Routes.Markup} />} />
            <Route path={Routes.Performance} element={<PerformancePage />} />
            <Route path={Routes.MemoryLeak} element={<MemoryLeakPage />} />
            <Route path={Routes.TenHocs} element={<TenHocsPage />} />
          </RouterRoutes>
        </div>
      </div>
      <SideMenu show={showMenu} onClose={onMenuTrigger}>
        <Menu />
      </SideMenu>
    </div>
  )
}
