import { ObjectId } from 'mongodb';
import { I_UpdateItemRepository, UpdateItemParams } from '../../controllers/update-item/protocols'
import { MongoClient } from '../../database/mongo';
import { Item } from '../../models/item';
import { MongoItem } from '../mongo-protocols';
import convertItemWithMongo_IdToItemWithId from '../../helpers/convertItemWithMongo_IdToItemWithId';

export class MongoUpdateItemRepository implements I_UpdateItemRepository{
  async updateItem(id:string, params:UpdateItemParams): Promise<Item> {
    await MongoClient.db.collection('items').updateOne(
      {_id: new ObjectId(id)},
      {
        $set:{
          ...params
        }
      }
    )

    const item = await MongoClient.db.collection<MongoItem>('items').findOne({_id: new ObjectId(id)})

    if(!item){
      throw new Error('Item not updated')
    }

    return convertItemWithMongo_IdToItemWithId(item)
  }
}