import { I_GetItemsRepository } from '../../controllers/get-items/protocols'
import { MongoClient } from '../../database/mongo';
import convertItemWithMongo_IdToItemWithId from '../../helpers/convertItemWithMongo_IdToItemWithId';
import { Item } from '../../models/item';
import { MongoItem } from '../mongo-protocols';

export class MongoGetItemsRepository implements I_GetItemsRepository{
  async getItems(): Promise<Item[]> {
    const items = await MongoClient.db.collection<MongoItem>('items').find({}).toArray()

    return items.map(convertItemWithMongo_IdToItemWithId)
  }
}