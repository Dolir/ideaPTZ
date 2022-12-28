import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState
} from "react"
import { CurrencyType, filterConfig } from "./config"

type FilterContextType = {
  currentCurrency: CurrencyType
  transferOptions: (number | null)[]
}
type FilterContextCommandType = {
  removeTransferOption: (value: number | null) => void
  addTransferOption: (value: number | null, removeOther?: boolean) => void
  setCurrentCurrency: (currency: CurrencyType) => void
}

//State
const FilterContext = createContext<FilterContextType>({} as FilterContextType)
export const useFilterContext = () => useContext(FilterContext)

//Command
const FilterContextCommand = createContext<FilterContextCommandType>(
  {} as FilterContextCommandType
)
export const useFilterContextCommand = () => useContext(FilterContextCommand)

export const FilterContextProvider = ({
  children
}: PropsWithChildren<unknown>) => {
  const [state, setState] = useState<FilterContextType>({
    currentCurrency: filterConfig.currencies[1],
    transferOptions: []
  })

  const command = useMemo(() => {
    return {
      removeTransferOption: (value: number | null) => {
        setState((prev) => ({
          ...prev,
          transferOptions: prev.transferOptions.filter((v) => v !== value)
        }))
      },
      addTransferOption: (value: number | null, removeOther?: boolean) => {
        setState((prev) => ({
          ...prev,
          transferOptions: [...(removeOther ? [] : prev.transferOptions), value]
        }))
      },
      setCurrentCurrency: (currency: CurrencyType) => {
        setState((prev) => ({ ...prev, currentCurrency: currency }))
      }
    }
  }, [])
  return (
    <FilterContextCommand.Provider value={command}>
      <FilterContext.Provider value={state}>{children}</FilterContext.Provider>
    </FilterContextCommand.Provider>
  )
}
