import { badRequest, ok, serverError } from '../../helpers/controllerResponses';
import { User } from '../../models/user';
import { HttpRequest, HttpResponse, I_Controller } from '../protocols';
import { I_DeleteUserRepository } from './protocols'

export class DeleteUserController implements I_Controller{
  constructor(private readonly deleteUserRepository:I_DeleteUserRepository){}
  
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User|string>> {
    try {
      const id = httpRequest.params?.id

      if(!id){
        return badRequest('Missing user id')
      }

      const user = await this.deleteUserRepository.deleteUser(id)

      return ok<User>(user)
    } catch (error) {
      return serverError()
    }
  }

}