import { User } from '../../models/user'
import { HttpResponse } from '../protocols'

export interface I_GetUsersController{
  handle(): Promise<HttpResponse<User[]>>
}

export interface I_GetUsersRepository{
  getUsers(): Promise<User[]>
}