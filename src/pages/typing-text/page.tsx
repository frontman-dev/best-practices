import React from "react"
import { TypingText } from "~/practices/typing-text/typing-text"
import { CssPage } from "../css-template/template"

export function TypingTextPage() {
  const code = `

  `
  return <CssPage title="Typing text" code={code} block={<TypingText />} />
}
