import React from "react"
import cn from "classnames"
import styles from "./button.css"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  left?: React.ReactNode
}

export function Button({ left, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(styles.button, {
        [styles.ghost]: true,
      })}
      {...rest}
    >
      {left}
      {children}
    </button>
  )
}
