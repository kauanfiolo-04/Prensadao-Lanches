import { WithId } from 'mongodb'
import { MongoUser } from '../repositories/mongo-protocols'

const convertUserWithMongo_IdToUserWithId=({_id, ...rest}:WithId<MongoUser>)=>({...rest, id:_id.toHexString()})

export default convertUserWithMongo_IdToUserWithId