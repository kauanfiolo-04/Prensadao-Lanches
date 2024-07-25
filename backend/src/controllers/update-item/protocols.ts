import { Item } from '../../models/item'

export interface UpdateItemParams{
  name?: string
  category?: string
  image?: string
  price?: number
}

export interface I_UpdateItemRepository{
  updateItem(id:string, params:UpdateItemParams): Promise<Item>
}