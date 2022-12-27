import { PropsWithChildren } from "react"

export const Container = ({ children }: PropsWithChildren<unknown>) => {
  return <div>{children}</div>
}
