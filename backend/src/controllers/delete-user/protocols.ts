import { HttpRequest, HttpResponse } from './../protocols';
import { User } from '../../models/user'

export interface I_DeleteUserRepository{
  deleteUser(id: string): Promise<User>
}