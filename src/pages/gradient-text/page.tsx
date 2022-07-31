import React from "react"
import { GradientText } from "~/practices/gradient-text/gradient-text"
import { CssPage } from "../css-template/template"

export function GradientTextPage() {
  const code = `
    background: linear-gradient(90deg, #df6363, #ffb88c);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  `
  return <CssPage title="Gradient text" code={code} block={<GradientText />} />
}
