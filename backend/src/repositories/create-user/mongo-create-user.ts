import { CreateUserParams, I_CreateUserRepository } from '../../controllers/create-user/protocols'
import { MongoClient } from '../../database/mongo';
import convertMongo_IdToId from '../../helpers/convertMongo_IdToId';
import { User } from '../../models/user';

export class MongoCreateUser implements I_CreateUserRepository{
  async createUser(params: CreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db.collection('users').insertOne(params)

    const user = await MongoClient.db.collection<Omit<User, 'id'>>('users').findOne({ _id: insertedId })

    if(!user) {
      throw new Error('User not created')
    }

    return convertMongo_IdToId(user)
  }
}