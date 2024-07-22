import { WithId } from 'mongodb'
import { User } from '../models/user'

const convertUserWithMongo_IdToUserWithId=({_id, ...rest}:WithId<Omit<User, 'id'>>)=>({...rest, id:_id.toHexString()})

export default convertUserWithMongo_IdToUserWithId