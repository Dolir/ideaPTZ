import { TicketType } from "src/ticketsData"
import { Ticket } from "./ticket"

type TicketListProp = {
  list: TicketType[]
}
export const TicketList = ({ list }: TicketListProp) => {
  return (
    <div>
      {list.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
