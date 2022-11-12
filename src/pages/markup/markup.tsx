import React from "react"
import { Card } from "~/components/card/card"
import { Cards } from "~/components/cards/cards"
import { Routes } from "~/core/routes"
import { Toggle } from "~/practices/toggle/toggle"
import { GradientText_Preview } from "~/previews/gradient-text/gradient-text"
import { Gradient_Preview } from "~/previews/gradient/gradient"
import { TextScrollAnimation_Preview } from "~/previews/text-scroll-animation/text-scroll-animation"
import { Tooltip_Preview } from "~/previews/tooltip/tooltip"
import { TruncatedText_Preview } from "~/previews/truncated-text/truncated-text"
import styles from "./markup.css"

export function MarkupPage() {
  return (
    <div className={styles.container}>
      <Cards>
        <Card to={Routes.Gradient} result={<Gradient_Preview />} caption="Gradient" />
        <Card to={Routes.GradientText} result={<GradientText_Preview />} caption="Gradient text" />
        <Card to={Routes.TruncatedText} result={<TruncatedText_Preview />} caption="Truncated text" />
        <Card to={Routes.Toggle} result={<Toggle />} caption="Toggle" />
        <Card to={Routes.Tooltip} result={<Tooltip_Preview />} caption="Tooltip" />
        <Card
          to={Routes.TextScrollAnimation}
          result={<TextScrollAnimation_Preview />}
          caption="Text scroll animation"
        />
        <Card to={Routes.WordChangeInPhrase} result={<></>} caption="Word change in phrase" />
        <Card to={Routes.TypingText} result={<></>} caption="Typing text" />
      </Cards>
    </div>
  )
}
