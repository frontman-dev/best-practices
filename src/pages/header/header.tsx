import React from "react"
import { Github } from "~/components/github/github"
import { Logo } from "~/components/logo/logo"
import { Image } from "~/components/image/image"
import styles from "./header.css"
import menuIcon from "~/assets/icons/menu.svg"

export type HeaderProps = {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className={styles.header}>
      <MenuTrigger onClick={onMenuClick} />
      <Logo />
      <Github />
    </div>
  )
}

type MenuTriggerProps = {
  onClick: () => void
}

function MenuTrigger({ onClick }: MenuTriggerProps) {
  return <Image className={styles.trigger} src={menuIcon} onClick={onClick} />
}
