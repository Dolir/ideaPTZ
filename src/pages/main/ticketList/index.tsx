import { tickets } from "src/ticketsData"
import { Ticket } from "./ticket"
import style from "./style.module.scss"
import { useFilterContext } from "../filterContext"
import { useMemo } from "react"

export const TicketList = () => {
  const { transferOptions } = useFilterContext()

  const filteredTickets = useMemo(() => {
    if (!transferOptions.length || transferOptions.includes(null))
      return tickets
    return tickets.filter((ticket) =>
      transferOptions.includes(ticket.transfers)
    )
  }, [transferOptions])

  return (
    <div className={style.ticketList}>
      {filteredTickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
