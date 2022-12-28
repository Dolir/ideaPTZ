import { HTMLProps, PropsWithChildren } from "react"
import style from "./style.module.scss"
import classNames from "classnames"

export const Container = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<unknown> & HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={classNames(style.containerComponent, {
        [className]: className
      })}
      {...props}
    >
      {children}
    </div>
  )
}
