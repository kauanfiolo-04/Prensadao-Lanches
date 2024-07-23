import { ObjectId } from 'mongodb';
import { I_DeleteUserRepository } from '../../controllers/delete-user/protocols'
import { MongoClient } from '../../database/mongo';
import { User } from "../../models/user";
import convertUserWithMongo_IdToUserWithId from '../../helpers/convertUserWithMongo_IdToUserWithId';

export class MongoDeleteUserRepository implements I_DeleteUserRepository{
  async deleteUser(id: string): Promise<User> {
    const user = await MongoClient.db.collection<Omit<User,'id'>>('users').findOne({_id:new ObjectId(id)})

    if(!user){
      throw new Error('User not found')
    }

    const { deletedCount } = await MongoClient.db.collection('users').deleteOne({_id: new ObjectId(id)})

    if(!deletedCount){
      throw new Error('User not deleted')
    }

    return convertUserWithMongo_IdToUserWithId(user)
  }
}