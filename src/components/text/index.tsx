import classNames from "classnames"
import { HTMLAttributes, PropsWithChildren } from "react"
import { ColorTypes, FontSizeTypes, FontWeightTypes } from "src/styles/types"
import style from "./style.module.scss"

type TextProp = {
  color?: ColorTypes | "currentColor"
  weight?: FontWeightTypes
  fontSize?: FontSizeTypes
  align?: "center" | "end" | "start" | "auto"
} & PropsWithChildren<unknown> &
  HTMLAttributes<HTMLDivElement>

export const Text = ({
  children,
  color = "currentColor",
  weight = "normal",
  fontSize = "h4",
  align = "auto",
  className = "",
  ...props
}: TextProp) => {
  return (
    <div
      className={classNames(style.textContainer, {
        [className]: className,
        [style[color] || ""]: color,
        [style[weight]]: weight,
        [style[fontSize]]: fontSize,
        [style[align] || ""]: align
      })}
      {...props}
    >
      {children}
    </div>
  )
}
