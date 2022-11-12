import React, { useCallback, useRef } from "react"
import cn from "classnames"
import { LinkProps, useNavigate } from "react-router-dom"
import { Routes } from "~/core/routes"
import styles from "./landing.css"
import { Button } from "~/components/button/button"
import { WordChanger } from "~/practices/word-changer/word-changer"

const handbookForWords = ["CSS", "JavaScript", "Interview", "Performance"]

export function LandingPage() {
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const onExplore = useCallback(() => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [cardsRef.current])

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.cta}>
          <div className={styles.title}>
            Your frontend handbook
            <WordChanger words={handbookForWords} />
          </div>
          <Button design="secondary" size="lg" children="Explore" onClick={onExplore} />
        </div>
        <div className={styles.background}></div>
      </div>
      <div className={styles.cards} ref={cardsRef}>
        <Card to={Routes.Markup} card="css" />
        <Card to={Routes.Interview} card="interview" />
        <Card disabled to={Routes.React} card="react" />
        <Card disabled to={Routes.Performance} card="performance" />
      </div>
    </div>
  )
}

type CardProps = Pick<LinkProps, "to"> & {
  card: string
  disabled?: boolean
}

function Card({ to, card, disabled = false }: CardProps) {
  const navigate = useNavigate()
  const onClick = useCallback(() => navigate(to), [navigate])

  return (
    <div
      className={cn(styles.card, {
        [styles["card-disabled"]]: disabled,
      })}
      onClick={onClick}
    >
      <div className={styles["card-label"]}>{labelByCardDict[card]}</div>
    </div>
  )
}

const labelByCardDict: Record<string, string> = {
  css: "CSS",
  interview: "Interview",
  react: "React",
  performance: "Performance",
}
