import { HttpRequest } from './../protocols';
import { User } from '../../models/user'
import { HttpResponse } from '../protocols'

export interface UpdateUserParams{
  firstName?: string
  lastName?: string
  password?: string
}

export interface I_UpdateUserController{
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>
}

export interface I_UpdateUserRepository{
  updateUser(id:string, params:UpdateUserParams):Promise<User>
}