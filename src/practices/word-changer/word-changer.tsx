import React from "react"
import styles from "./word-changer.css"

export type WordChangerProps = {
  words: string[]
}

export function WordChanger({ words }: WordChangerProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {words.map((x, idx) => (
          <li key={idx}>{x}</li>
        ))}
      </ul>
    </div>
  )
}
