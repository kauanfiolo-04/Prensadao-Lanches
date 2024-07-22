import { I_GetUsersRepository } from '../../controllers/get-users/protocols'
import { MongoClient } from '../../database/mongo'
import convertUserWithMongo_IdToUserWithId from '../../helpers/convertUserWithMongo_IdToUserWithId'
import { User } from '../../models/user'

export class MongoGetUsersRepository implements I_GetUsersRepository{
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db.collection<Omit<User, 'id'>>('users').find({}).toArray()

    return users.map(convertUserWithMongo_IdToUserWithId)
  }
}