export const filterConfig = {
  currencies: [
    {
      name: "RUB",
      /** USD is a default currency and price
       *
       * That means ```currencyMultiplier * (usd price) = currencyPrice```
       */
      multiplier: 80,
      symbol: "₽"
    },
    {
      name: "USD",
      multiplier: 1,
      symbol: "$"
    },
    {
      name: "EUR",
      multiplier: 0.94,
      symbol: "€"
    }
  ],
  transferOptions: [
    { name: "Все", value: null },
    { name: "Без пересадок", value: 0 },
    { name: "1 пересадка", value: 1 },
    { name: "2 пересадки", value: 2 },
    { name: "3 пересадки", value: 3 }
  ]
} as const

export type CurrencyType = typeof filterConfig.currencies[number]
export type TransferOptionType = typeof filterConfig.transferOptions[number]
