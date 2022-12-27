import { PropsWithChildren } from "react"

type ButtonProp = {
  color?: ""
} & PropsWithChildren<unknown>

export const Button = ({ children }: ButtonProp) => {
  return <div>{children}</div>
}
