import React from "react"
import cn from "classnames"
import styles from "./button.css"

export type ButtonDesign = "primary" | "secondary" | "ghost"

export type ButtonSize = "sm" | "md" | "lg"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  design?: ButtonDesign
  size?: ButtonSize
  left?: React.ReactNode
}

export function Button({ design = "primary", size = "md", left, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: design === "primary",
        [styles.secondary]: design === "secondary",
        [styles.ghost]: design === "ghost",
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
      })}
      {...rest}
    >
      {left}
      {children}
    </button>
  )
}
