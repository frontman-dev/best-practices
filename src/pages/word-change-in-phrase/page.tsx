import React from "react"
import { WordChanger } from "~/practices/word-changer/word-changer"
import { CssPage } from "../css-template/template"
import styles from "./page.css"

export function WordChangeInPhrasePage() {
  const code = `
    .container {
      position: relative;
      overflow: hidden;
      height: 1.2em;
      font-size: inherit;
    }

    .list {
      position: absolute;
      top: 0;
      left: 0;
      list-style-type: none;
      margin: 0;
      padding: 0;
      height: 1.2em;
      animation: changer 5s ease-in-out alternate infinite;
    }

    @keyframes changer {
      0%,
      10% {
        transform: translateY(0%);
      }
      15%,
      35% {
        transform: translateY(-100%);
      }
      40%,
      60% {
        transform: translateY(-200%);
      }
      65%,
      85% {
        transform: translateY(-300%);
      }
      90%,
      100% {
        transform: translateY(-400%);
      }
    }
  `
  return (
    <CssPage
      title="Word change in phrase"
      code={code}
      block={
        <div className={styles.result}>
          <WordChanger words={["JavaScript", "Python", "Haskell", "Golang", "Java"]} />
        </div>
      }
    />
  )
}
