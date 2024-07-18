import { WithId } from 'mongodb'
import { User } from '../models/user'

const convertMongo_IdToId=({_id, ...rest}:WithId<Omit<User, 'id'>>)=>({...rest, id:_id.toHexString()})

export default convertMongo_IdToId