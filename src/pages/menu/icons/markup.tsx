import React from "react"

export function MarkupIcon({ color }: { color?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" fill={color} />
      <rect x="20" width="6" height="6" fill={color} />
      <rect x="20" y="10" width="6" height="6" fill={color} />
      <rect x="20" y="20" width="6" height="6" fill={color} />
      <rect x="10" y="20" width="6" height="6" fill={color} />
      <rect y="20" width="6" height="6" fill={color} />
    </svg>
  )
}
