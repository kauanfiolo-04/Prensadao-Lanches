import { ObjectId } from 'mongodb'
import { I_DeleteItemRepository } from '../../controllers/delete-item/protocols'
import { MongoClient } from '../../database/mongo'
import { Item } from '../../models/item'
import { MongoItem } from '../mongo-protocols'
import convertItemWithMongo_IdToItemWithId from '../../helpers/convertItemWithMongo_IdToItemWithId'

export class MongoDeleteItemRepository implements I_DeleteItemRepository{
  async deleteItem(id: string): Promise<Item> {
    const item = await MongoClient.db.collection<MongoItem>('items').findOne({_id: new ObjectId(id)})

    if(!item){
      throw new Error('Item not found')
    }

    const { deletedCount } = await MongoClient.db.collection('items').deleteOne({_id: new ObjectId(id)})

    if(!deletedCount){
      throw new Error('Item not deleted')
    }

    return convertItemWithMongo_IdToItemWithId(item)
  }
}