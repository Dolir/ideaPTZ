import { filterConfig } from "../../config"
import { TransferOption } from "./transferOption"
import style from "./style.module.scss"

export const TransferOptions = () => {
  return (
    <div className={style.transfersList}>
      {filterConfig.transferOptions.map((option) => (
        <TransferOption key={option.value} option={option} />
      ))}
    </div>
  )
}
