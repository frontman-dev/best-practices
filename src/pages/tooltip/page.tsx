import React from "react"
import { Tooltip } from "~/practices/tooltip/tooltip"
import { CssPage } from "../css-template/template"

export function TooltipPage() {
  const code = `
    .tooltip {
      position: relative;
      display: inline-block;
    }

    .tooltip::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -100%);
      border-width: 4px 6px 0;
      border-style: solid;
      border-color: black transparent transparent transparent;
      opacity: 0;
      z-index: 10;
    }

    .tooltip::after {
      content: attr(data-label);
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, calc(-100% - 4px));
      opacity: 0;
      border-radius: 4px;
      background-color: black;
      color: white;
      text-align: center;
      white-space: nowrap;
      padding: 6px 8px;
      z-index: 10;
    }

    .tooltip:hover::before,
    .tooltip:hover::after {
      opacity: 1;
    }
  `
  return (
    <CssPage
      title="Tooltip"
      code={code}
      block={<Tooltip label="Centered tooltip" children={<button>Button</button>} />}
    />
  )
}
