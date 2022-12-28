import { CheckBox } from "src/components/checkbox"
import { Text } from "src/components/text"
import { TransferOptionType } from "src/pages/main/config"
import {
  useFilterContext,
  useFilterContextCommand
} from "src/pages/main/filterContext"

import style from "./style.module.scss"

export const TransferOption = ({ option }: { option: TransferOptionType }) => {
  const { addTransferOption, removeTransferOption } = useFilterContextCommand()
  const { transferOptions } = useFilterContext()
  return (
    <div className={style.optionContainer}>
      <CheckBox
        onChange={(e) => {
          if (!e.target.checked) {
            removeTransferOption(option.value)
          } else {
            addTransferOption(option.value)
          }
        }}
        checked={transferOptions.includes(option.value)}
      />
      <Text>{option.name}</Text>
      <Text
        className={style.onlyButton}
        color="primary"
        onClick={(e) => {
          e.stopPropagation()
          addTransferOption(option.value, true)
        }}
      >
        ТОЛЬКО
      </Text>
    </div>
  )
}
