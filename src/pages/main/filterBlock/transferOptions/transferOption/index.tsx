import { CheckBox } from "src/components/checkbox"
import { Text } from "src/components/text"

export const TransferOption = ({ option }: any) => {
  return (
    <div>
      <CheckBox />
      <Text>{option.name}</Text>
      <Text>ТОЛЬКО</Text>
    </div>
  )
}
