import React, { useCallback } from "react"
import { GITHUB_URL } from "~/core/constants"
import { pushHistory } from "~/core/utils/history"
import styles from "./github.css"

export type GithubProps = {}

// @todo: make a redesigned link
export function Github() {
  const onClick = useCallback(() => pushHistory(GITHUB_URL), [])

  return (
    <button onClick={onClick} className={styles.github}>
      GitHub
    </button>
  )
}
