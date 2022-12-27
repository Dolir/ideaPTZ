import { PropsWithChildren } from "react"

type TextProp = {
  color?: ""
  weight?: ""
  size?: ""
} & PropsWithChildren<unknown>

export const Text = ({ children }: TextProp) => {
  return <div>{children}</div>
}
