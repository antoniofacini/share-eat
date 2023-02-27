export interface Item {
  name: string
  description: string
  price: number
}

export interface Items {
  menuItems: Item[]
}
export interface Place {
  id: number
  name: string
  menuItems: Item[]
}

export interface Places {
  data: Place[]
}
