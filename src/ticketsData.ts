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
const generateRandomDate = () => {
  return new Date(new Date().getTime() - Math.random() * 1e12)
}
export const tickets = [
  {
    id: 0,
    price: 100,
    transfers: 0,
    departure: {
      time: generateRandomDate().getTime(),
      location: "VVO, Владивосток"
    },
    arrival: {
      time: generateRandomDate().getTime(),
      location: "Тель-Авив, TLV"
    }
  },
  {
    id: 2,
    price: 132,
    transfers: 1,
    departure: {
      time: generateRandomDate().getTime(),
      location: "NE, Париж"
    },
    arrival: {
      time: generateRandomDate().getTime(),
      location: "Милан, MI"
    }
  },
  {
    id: 3,
    price: 43,
    transfers: 3,
    departure: {
      time: generateRandomDate().getTime(),
      location: "MSC, Москва"
    },
    arrival: {
      time: generateRandomDate().getTime(),
      location: "Урал, STB"
    }
  },
  {
    id: 4,
    price: 84,
    transfers: 4,
    departure: {
      time: generateRandomDate().getTime(),
      location: "SM, Магадан"
    },
    arrival: {
      time: generateRandomDate().getTime(),
      location: "Пекин, PK"
    }
  },
  {
    id: 5,
    price: 530,
    transfers: 6,
    departure: {
      time: generateRandomDate().getTime(),
      location: "TK, Токио"
    },
    arrival: {
      time: generateRandomDate().getTime(),
      location: "Рим, IS"
    }
  }
]
