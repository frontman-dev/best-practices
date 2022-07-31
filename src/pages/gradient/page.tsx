import React from "react"
import { Gradient } from "~/practices/gradient/gradient"
import { CssPage } from "../css-template/template"

export function GradientPage() {
  const code = `
    background: linear-gradient(90deg, #2cc0e6 0%, #2cd0c2 50%, #e8edd7 100%);
  `
  return <CssPage title="Gradient" code={code} block={<Gradient />} />
}
