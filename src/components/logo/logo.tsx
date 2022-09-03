import React from "react"
import { Link } from "react-router-dom"
import logoLight from "~/assets/icons/logo_light.svg"
import { Routes } from "~/core/routes"
import { Image } from "~/components/image/image"

export function Logo() {
  return (
    <Link to={Routes.Index}>
      <Image width={30} height={34} src={logoLight} />
    </Link>
  )
}
