import { HTMLAttributes, PropsWithChildren } from "react"
import style from "./style.module.scss"
import classNames from "classnames"
import { ColorTypes } from "src/styles/types"

type ButtonProp = {
  color?: ColorTypes
  isActive?: boolean
} & PropsWithChildren<unknown> &
  HTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  className = "",
  color = "primary",
  isActive,
  ...props
}: ButtonProp) => {
  return (
    <button
      className={classNames(style.buttonComponent, {
        [className]: className,
        [style[color]]: color,
        [style.active]: isActive
      })}
      {...props}
    >
      {children}
    </button>
  )
}
