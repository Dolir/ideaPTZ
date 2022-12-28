import { Button } from "src/components/button"
import { ButtonGroup } from "src/components/buttonGroup"
import { Container } from "src/components/container"
import { Text } from "src/components/text"
import { filterConfig } from "../config"
import { TransferOptions } from "./transferOptions"
import style from "./style.module.scss"
import { useFilterContext, useFilterContextCommand } from "../filterContext"

export const FilterBlock = () => {
  const { currentCurrency } = useFilterContext()
  const { setCurrentCurrency } = useFilterContextCommand()
  return (
    <Container className={style.filterBlockContainer}>
      <div className={style.filterElement}>
        <Text>ВАЛЮТА</Text>
        <ButtonGroup>
          {filterConfig.currencies.map((currency) => (
            <Button
              key={currency.name}
              isActive={currency.name === currentCurrency.name}
              onClick={() => setCurrentCurrency(currency)}
            >
              {currency.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className={style.filterElement}>
        <Text>КОЛИЧЕСТВО ПЕРЕСАДОК</Text>
        <TransferOptions />
      </div>
    </Container>
  )
}
