import { tickets } from "src/ticketsData"
import { Ticket } from "./ticket"
import style from "./style.module.scss"
import { useFilterContext } from "../filterContext"
import { useMemo } from "react"
import { Text } from "src/components/text"

export const TicketList = () => {
  const { transferOptions } = useFilterContext()

  const filteredTickets = useMemo(() => {
    if (!transferOptions.length || transferOptions.includes(null))
      return tickets
    return tickets.filter((ticket) =>
      transferOptions.includes(ticket.transfers)
    )
  }, [transferOptions])

  if (!filteredTickets.length)
    return (
      <Text className={style.notFound} align="center" fontSize="h0">
        Ничего не найдено
        <br />
        <br />
        <Text fontSize="h3">Попробуйте изменить фильтры</Text>
      </Text>
    )
  return (
    <div className={style.ticketList}>
      {filteredTickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
