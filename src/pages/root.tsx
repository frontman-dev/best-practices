import React, { useCallback, useState } from "react"
import styles from "./root.css"
import { Header } from "./header/header"
import { Navigation } from "./navigation/navigation"
import { MarkupPage } from "./markup/markup"
import { Route, Routes as RouterRoutes, useLocation } from "react-router-dom"
import { Routes } from "~/core/routes"
import { ReactPage } from "./react/react"
import { GradientPage } from "./gradient/page"
import { GradientTextPage } from "./gradient-text/page"
import { SideMenu } from "~/components/sidemenu/sidemenu"
import { Menu } from "./menu/menu"
import { PerformancePage } from "./performance/performance"
import { TruncatedTextPage } from "./truncated-text/page"
import { TogglePage } from "./toggle/page"
import { TooltipPage } from "./tooltip/page"
import { GetMiddleCharacterPage } from "./get-middle-character/page"
import { InterviewPage } from "./interview/interview"
import { WordChangeInPhrasePage } from "./word-change-in-phrase/page"
import { Footer } from "./footer/footer"
import { TypingTextPage } from "./typing-text/page"
import { GlassEffectPage } from "./glass-effect/page"
import { LandingPage } from "./landing/landing"

export function Root() {
  const { pathname } = useLocation()

  const [showMenu, setShowMenu] = useState(false)
  const onMenuTrigger = useCallback(() => setShowMenu(shown => !shown), [setShowMenu])

  return (
    <div className={styles.root}>
      <Header onMenuClick={onMenuTrigger} />
      <div className={styles.container}>
        {pathname !== Routes.Index && <Navigation />}
        <div className={styles.page}>
          <RouterRoutes>
            <Route path={Routes.Index} element={<LandingPage />} />
            {/* Markup */}
            <Route path={Routes.Markup} element={<MarkupPage />} />
            <Route path={Routes.Gradient} element={<GradientPage />} />
            <Route path={Routes.GradientText} element={<GradientTextPage />} />
            <Route path={Routes.TruncatedText} element={<TruncatedTextPage />} />
            <Route path={Routes.Toggle} element={<TogglePage />} />
            <Route path={Routes.Tooltip} element={<TooltipPage />} />
            <Route path={Routes.WordChangeInPhrase} element={<WordChangeInPhrasePage />} />
            <Route path={Routes.TypingText} element={<TypingTextPage />} />
            <Route path={Routes.GlassEffect} element={<GlassEffectPage />} />
            {/* React */}
            <Route path={Routes.React} element={<ReactPage />} />
            {/* Performance */}
            <Route path={Routes.Performance} element={<PerformancePage />} />
            {/* Interview */}
            <Route path={Routes.Interview} element={<InterviewPage />} />
            <Route path={Routes.GetMiddleCharacter} element={<GetMiddleCharacterPage />} />
          </RouterRoutes>
        </div>
      </div>
      <Footer />
      <SideMenu show={showMenu} onClose={onMenuTrigger}>
        <Menu />
      </SideMenu>
    </div>
  )
}
