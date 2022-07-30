import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "highlight.js/styles/github.css"
import { Root } from "./pages/root"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
)
