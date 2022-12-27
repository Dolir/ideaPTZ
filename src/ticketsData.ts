export type TicketType = {
  id: number
  price: number
  transfers: number
  departure: {
    time: number
    location: string
  }
  arrival: {
    time: number
    location: string
  }
}
export const tickets = [
  {
    id: 0,
    price: 100,
    transfers: 0,
    departure: {
      time: Date.now(),
      location: "VVO, Владивосток"
    },
    arrival: {
      time: Date.now(),
      location: "Тель-Авив, TLV"
    }
  },
  {
    id: 2,
    price: 100,
    transfers: 1,
    departure: {
      time: Date.now(),
      location: "VVO, Владивосток"
    },
    arrival: {
      time: Date.now(),
      location: "Тель-Авив, TLV"
    }
  },
  {
    id: 3,
    price: 100,
    transfers: 3,
    departure: {
      time: Date.now(),
      location: "VVO, Владивосток"
    },
    arrival: {
      time: Date.now(),
      location: "Тель-Авив, TLV"
    }
  },
  {
    id: 4,
    price: 100,
    transfers: 4,
    departure: {
      time: Date.now(),
      location: "VVO, Владивосток"
    },
    arrival: {
      time: Date.now(),
      location: "Тель-Авив, TLV"
    }
  },
  {
    id: 5,
    price: 100,
    transfers: 6,
    departure: {
      time: Date.now(),
      location: "VVO, Владивосток"
    },
    arrival: {
      time: Date.now(),
      location: "Тель-Авив, TLV"
    }
  }
]
