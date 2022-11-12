import React from "react"
import { GlassEffect } from "~/practices/glass-effect/glass-effect"
import { CssPage } from "../css-template/template"

export function GlassEffectPage() {
  const code = `

  `
  return <CssPage title="Glass effect" code={code} block={<GlassEffect />} />
}
