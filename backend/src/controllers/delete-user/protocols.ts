import { HttpRequest, HttpResponse } from './../protocols';
import { User } from '../../models/user'

export interface I_DeleteUserRepository{
  deleteUser(id: string): Promise<User>
}

export interface I_DeleteUserController{
  handle(httpRequest:HttpRequest<any>): Promise<HttpResponse<User>>
}