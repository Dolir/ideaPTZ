import { Button } from "src/components/button"
import { ButtonGroup } from "src/components/buttonGroup"
import { Container } from "src/components/container"
import { Text } from "src/components/text"
import { filterConfig } from "./config"
import { TransferOptions } from "./transferOptions"

export const FilterBlock = () => {
  return (
    <Container>
      <div>
        <Text>Валюта</Text>
        <ButtonGroup>
          {filterConfig.currencies.map((currency) => (
            <Button key={currency.name}>{currency.name}</Button>
          ))}
        </ButtonGroup>
      </div>
      <div>
        <Text>Количество пересадок</Text>
        <TransferOptions />
      </div>
    </Container>
  )
}
