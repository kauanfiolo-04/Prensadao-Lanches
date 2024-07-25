import { Item } from '../../models/item'

export interface I_GetItemsRepository{
  getItems() : Promise<Item[]>
}