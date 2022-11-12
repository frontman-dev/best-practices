import React from "react"
import { storiesOf } from "@storybook/react"
import { GlassEffect } from "./glass-effect"

const stories = storiesOf("css/glass-effect", module)

stories.add("Glass effect", () => (
  <div
    style={{
      width: "600px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    }}
  >
    <GlassEffect />
  </div>
))
