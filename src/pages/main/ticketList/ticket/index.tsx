import { Button } from "src/components/button"
import { Container } from "src/components/container"
import { Text } from "src/components/text"
import { TicketType } from "src/ticketsData"
import style from "./style.module.scss"
import defaultIcon from "./assets/defaultIcon.png"
import { formatDate, formatTime, translateCurrency } from "./helper"
import { ReactComponent as PlaneIcon } from "./assets/planeIcon.svg"
import { useFilterContext } from "../../filterContext"

type TicketProp = {
  ticket: TicketType
}
export const Ticket = ({ ticket }: TicketProp) => {
  const { currentCurrency } = useFilterContext()
  return (
    <Container className={style.ticketContainer}>
      <div className={style.ticketLeft}>
        <img src={defaultIcon} alt="ticket icon" />
        <Button color="secondary" isActive>
          <Text fontSize="h3">Купить</Text>
          <Text fontSize="h3">
            за {translateCurrency(ticket.price, currentCurrency)}
          </Text>
        </Button>
      </div>
      <div className={style.ticketRight}>
        <div className={style.ticketHeader}>
          <Text fontSize="h0">{formatTime(ticket.departure.time)}</Text>
          <div className={style.planeLine}>
            {!!ticket.transfers && (
              <Text className={style.transferInfo} align="center">
                {ticket.transfers}{" "}
                {ticket.transfers === 1 ? "пересадка" : "пересадки"}
              </Text>
            )}
            <div className={style.line}></div>
            <PlaneIcon />
          </div>
          <Text fontSize="h0">{formatTime(ticket.arrival.time)}</Text>
        </div>
        <div className={style.ticketBottomInfo}>
          <div>
            <Text weight="bold">{ticket.departure.location}</Text>
            <Text weight="bold">{ticket.arrival.location}</Text>
          </div>
          <div>
            <Text color="black60op">{formatDate(ticket.departure.time)}</Text>
            <Text color="black60op">{formatDate(ticket.arrival.time)}</Text>
          </div>
        </div>
      </div>
    </Container>
  )
}
