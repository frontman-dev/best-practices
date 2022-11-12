import React from "react"
import { Toggle } from "~/practices/toggle/toggle"
import { CssPage } from "../css-template/template"

export function TogglePage() {
  const code = `
    .wrapper {
      position: relative;
      cursor: pointer;
    }

    label {
      display: block;
      background-color: rgb(120, 120, 128, 0.32);

      width: 51px;
      height: 31px;
      border-radius: 16px;
    }

    label::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      height: 27px;
      width: 27px;
      background: #fff;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
      border-radius: 50%;
      transition: 0.15s all ease-in-out;
      z-index: 1;
    }

    input {
      display: none;
    }

    input:checked + label {
      background-color: #32d74b;
      opacity: 1;
    }

    input:checked + label::before {
      transform: translateX(20px);
      transform-origin: 100% 0;
    }
  `
  return <CssPage title="Toggle" code={code} block={<Toggle />} />
}
