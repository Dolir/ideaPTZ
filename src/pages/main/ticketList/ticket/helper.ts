import { CurrencyType } from "./../../config"

export const translateCurrency = (usdPrice: number, currency: CurrencyType) => {
  return `${usdPrice * currency.multiplier} ${currency.symbol}`
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
export const formatDate = (date: Date | number) => {
  date = new Date(date)
  return `${date.toLocaleDateString("ru", {
    month: "numeric"
  })} ${date.toLocaleDateString("ru", {
    month: "short"
  })} ${date.toLocaleDateString("ru", {
    year: "numeric"
  })}, ${capitalizeFirstLetter(
    date.toLocaleDateString("ru", { weekday: "short" })
  )}`
}

export const formatTime = (date: Date | number) => {
  date = new Date(date)
  return `${date.toLocaleTimeString("ru", {
    hour: "numeric",
    minute: "numeric"
  })}`
}
