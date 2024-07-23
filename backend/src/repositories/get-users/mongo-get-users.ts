import { I_GetUsersRepository } from '../../controllers/get-users/protocols'
import { MongoClient } from '../../database/mongo'
import convertUserWithMongo_IdToUserWithId from '../../helpers/convertUserWithMongo_IdToUserWithId'
import { User } from '../../models/user'
import { MongoUser } from '../mongo-protocols'

export class MongoGetUsersRepository implements I_GetUsersRepository{
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db.collection<MongoUser>('users').find({}).toArray()

    return users.map(convertUserWithMongo_IdToUserWithId)
  }
}