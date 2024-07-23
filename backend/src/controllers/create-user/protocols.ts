import { User } from '../../models/user'

export interface CreateUserParams{
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface I_CreateUserRepository{
  createUser(params: CreateUserParams): Promise<User>
}