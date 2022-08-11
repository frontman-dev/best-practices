import React, { useEffect } from "react"
import cn from "classnames"
import styles from "./sidemenu.css"
import closeIcon from "~/assets/icons/close.svg"
import { Image } from "~/components/image/image"
import { useLocation } from "react-router-dom"

export type SideMenuProps = {
  children: React.ReactNode | React.ReactNode[]
  show: boolean
  onClose: () => void
}

export function SideMenu({ show, onClose, children }: SideMenuProps) {
  const location = useLocation()
  useEffect(() => {
    if (show) {
      onClose()
    }
  }, [location])

  return (
    <div
      className={cn(styles.sidemenu, {
        [styles.shown]: show,
      })}
    >
      {show && <Image className={styles.close} src={closeIcon} onClick={onClose} />}
      {children}
    </div>
  )
}
