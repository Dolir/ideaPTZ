import { Button } from "src/components/button"
import { Container } from "src/components/container"
import { Text } from "src/components/text"
import { TicketType } from "src/ticketsData"

type TicketProp = {
  ticket: TicketType
}
export const Ticket = ({ ticket }: TicketProp) => {
  return (
    <Container>
      <div>
        <div>icon</div>
        <Button>Купить</Button>
      </div>
      <div>
        <div>
          <Text>time</Text>
          <Text>transfers</Text>
          <Text>time</Text>
        </div>
        <div>
          <div>
            <Text>Location</Text>
            <Text>Location</Text>
          </div>
          <div>
            <Text>date</Text>
            <Text>date</Text>
          </div>
        </div>
      </div>
    </Container>
  )
}
