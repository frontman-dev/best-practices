import React from "react"
import { TruncatedText } from "~/practices/truncated-text/truncated-text"
import { CssPage } from "../css-template/template"

export function TruncatedTextPage() {
  const code = `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `
  return <CssPage title="Truncated text" code={code} block={<TruncatedText />} />
}
