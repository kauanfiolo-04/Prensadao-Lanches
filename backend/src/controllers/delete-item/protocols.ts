import { Item } from '../../models/item'

export interface I_DeleteItemRepository{
  deleteItem(id:string): Promise<Item>
}