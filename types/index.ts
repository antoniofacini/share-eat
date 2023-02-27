export interface IData {
  data: IPlace[]
}

export interface IPlace {
  name: string
  menuItems: IItem[]
}

export interface IItem {
  name: string
  description: string
  price: number
}
