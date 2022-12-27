import { useMemo } from "react"
import { tickets } from "src/ticketsData"
import { FilterBlock } from "./filterBlock"
import style from "./style.module.scss"
import { TicketList } from "./ticketList"

export const MainPage = () => {
  const filteredTickets = useMemo(() => tickets, [])

  return (
    <div className={style.mainContainer}>
      <FilterBlock />
      <TicketList list={filteredTickets} />
    </div>
  )
}
