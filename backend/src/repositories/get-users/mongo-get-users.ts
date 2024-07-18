import { I_GetUsersRepository } from '../../controllers/get-users/protocols'
import { MongoClient } from '../../database/mongo'
import convertMongo_IdToId from '../../helpers/convertMongo_IdToId'
import { User } from '../../models/user'

export class MongoGetUsersRepository implements I_GetUsersRepository{
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db.collection<Omit<User, 'id'>>('users').find({}).toArray()

    return users.map(convertMongo_IdToId)
  }
}