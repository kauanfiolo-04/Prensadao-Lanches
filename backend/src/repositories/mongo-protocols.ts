import { Item } from '../models/item'
import { User } from '../models/user'

export type MongoUser = Omit<User,'id'>
export type MongoItem = Omit<Item, 'id'>