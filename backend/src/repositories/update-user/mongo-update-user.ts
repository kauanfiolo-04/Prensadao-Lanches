import { ObjectId } from 'mongodb'
import { I_UpdateUserRepository, UpdateUserParams } from '../../controllers/update-user/protocols'
import { MongoClient } from '../../database/mongo'
import { User } from '../../models/user'
import convertUserWithMongo_IdToUserWithId from '../../helpers/convertUserWithMongo_IdToUserWithId'
import { MongoUser } from '../mongo-protocols'

export class MongoUpdateUserRepository implements I_UpdateUserRepository{
  async updateUser(id: string, params: UpdateUserParams): Promise<User> {
    await MongoClient.db.collection('users').updateOne(
      { _id: new ObjectId(id) }, 
      {
        $set:{
          ...params
        }
      }
    )

    const user = await MongoClient.db.collection<MongoUser>('users').findOne({_id: new ObjectId(id)})

    if(!user){
      throw new Error('User not updated')
    }else{
      return convertUserWithMongo_IdToUserWithId(user)
    }
  }
}