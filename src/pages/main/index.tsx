import { FilterBlock } from "./filterBlock"
import { FilterContextProvider } from "./filterContext"
import style from "./style.module.scss"
import { TicketList } from "./ticketList"

export const MainPage = () => {
  return (
    <div className={style.mainContainer}>
      <FilterContextProvider>
        <FilterBlock />
        <TicketList />
      </FilterContextProvider>
    </div>
  )
}
