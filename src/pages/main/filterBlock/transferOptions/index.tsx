import { filterConfig } from "../config"
import { TransferOption } from "./transferOption"

export const TransferOptions = () => {
  return (
    <div>
      {filterConfig.transferOptions.map((option) => (
        <TransferOption option={option} />
      ))}
    </div>
  )
}
