import React, { useCallback } from "react"
import { GITHUB_URL } from "~/core/constants"
import githubIcon from "~/assets/icons/github.svg"
import { pushHistory } from "~/core/utils/history"
import { Button } from "~/components/button/button"
import { Image } from "~/components/image/image"

export function Github() {
  // @todo: open new tab
  const onClick = useCallback(() => pushHistory(GITHUB_URL), [])

  return <Button design="ghost" size="sm" onClick={onClick} left={<Image src={githubIcon} />} children="GitHub" />
}
