import { WithId } from 'mongodb'
import { MongoItem } from '../repositories/mongo-protocols'

const convertItemWithMongo_IdToItemWithId=({_id, ...rest}:WithId<MongoItem>)=>({...rest, id:_id.toHexString()})

export default convertItemWithMongo_IdToItemWithId