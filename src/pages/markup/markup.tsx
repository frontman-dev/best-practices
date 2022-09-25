import React from "react"
import { Card } from "~/components/card/card"
import { Cards } from "~/components/cards/cards"
import { Routes } from "~/core/routes"
import { GradientText_Preview } from "~/previews/gradient-text/gradient-text"
import { Gradient_Preview } from "~/previews/gradient/gradient"
import { TruncatedText_Preview } from "~/previews/truncated-text/truncated-text"
import styles from "./markup.css"

export function MarkupPage() {
  return (
    <div className={styles.container}>
      <Cards>
        <Card to={Routes.Gradient} result={<Gradient_Preview />} caption="Gradient" />
        <Card to={Routes.GradientText} result={<GradientText_Preview />} caption="Gradient text" />
        <Card to={Routes.TruncatedText} result={<TruncatedText_Preview />} caption="Truncated text" />
      </Cards>
    </div>
  )
}
