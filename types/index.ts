export interface IData {
  data: IPlace[]
}

export interface IPost {
  message: string
  status: string
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
