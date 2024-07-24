import { CreateItemParams, I_CreateItemRepository } from '../../controllers/create-item/protocols';
import { MongoClient } from '../../database/mongo';
import convertItemWithMongo_IdToItemWithId from '../../helpers/convertItemWithMongo_IdToItemWithId';
import { Item } from '../../models/item'
import { MongoItem } from '../mongo-protocols';

export class MongoCreateItemRepository implements I_CreateItemRepository{
  async createItem(params: CreateItemParams): Promise<Item> {
    const { insertedId } = await MongoClient.db.collection('items').insertOne(params)

    const item = await MongoClient.db.collection<MongoItem>('items').findOne({_id: insertedId})

    if(!item){
      throw new Error('Item not created') 
    }

    return convertItemWithMongo_IdToItemWithId(item)
  }
}