import { CreateUserParams, I_CreateUserRepository } from '../../controllers/create-user/protocols'
import { MongoClient } from '../../database/mongo'
import convertUserWithMongo_IdToUserWithId from '../../helpers/convertUserWithMongo_IdToUserWithId'
import { User } from '../../models/user'
import { MongoUser } from '../mongo-protocols'

export class MongoCreateUserRepository implements I_CreateUserRepository{
  async createUser(params: CreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db.collection('users').insertOne(params)

    const user = await MongoClient.db.collection<MongoUser>('users').findOne({ _id: insertedId })

    if(!user) {
      throw new Error('User not created')
    }

    return convertUserWithMongo_IdToUserWithId(user)
  }
}