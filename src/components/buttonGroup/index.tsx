import { HTMLAttributes, PropsWithChildren } from "react"
import style from "./style.module.scss"
import classNames from "classnames"

export const ButtonGroup = ({
  children,
  className = ""
}: PropsWithChildren<unknown> & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(style.buttonGroupComponent, {
        [className]: className
      })}
    >
      {children}
    </div>
  )
}
