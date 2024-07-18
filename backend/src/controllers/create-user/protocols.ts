import { User } from '../../models/user'
import { HttpRequest, HttpResponse } from '../protocols'

export interface I_CreateUserController{
  handle(httpRequest:HttpRequest<CreateUserParams>): Promise<HttpResponse<User>>
}

export interface CreateUserParams{
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface I_CreateUserRepository{
  createUser(params: CreateUserParams): Promise<User>
}