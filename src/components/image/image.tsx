import React from "react"

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  className?: string
}

export function Image({ src, className, onClick }: ImageProps) {
  return <img className={className} src={src} onClick={onClick} />
}
