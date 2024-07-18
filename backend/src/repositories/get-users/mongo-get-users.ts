import { I_GetUsersRepository } from '../../controllers/get-users/protocols'
import { MongoClient } from '../../database/mongo'
import { User } from '../../models/user'

export class MongoGetUsersRepository implements I_GetUsersRepository{
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db.collection<Omit<User, "id">>('users').find({}).toArray()

    const convertMongo_IdToId=(arr:typeof users)=>arr.map(({_id, ...rest})=>({...rest, id:_id.toHexString()}))

    return convertMongo_IdToId(users)
  }
}