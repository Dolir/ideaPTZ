import { InputHTMLAttributes } from "react"
import style from "./style.module.scss"

type CheckBoxProp = {} & InputHTMLAttributes<HTMLInputElement>
export const CheckBox = ({ ...props }: CheckBoxProp) => {
  return (
    <div className={style.checkboxContainer}>
      <input type="checkbox" {...props} />
      <span className={style.checkMark} />
    </div>
  )
}
