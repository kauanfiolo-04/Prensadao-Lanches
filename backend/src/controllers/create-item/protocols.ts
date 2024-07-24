import { Item } from "../../models/item"

export interface CreateItemParams{
  name: string
  category: string
  price: number
  image: string
}

export interface I_CreateItemRepository{
  createItem(createItemParams:CreateItemParams): Promise<Item>
}