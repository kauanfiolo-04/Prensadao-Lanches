import { User } from '../../models/user'

export interface I_GetUsersRepository{
  getUsers(): Promise<User[]>
}