import { User } from '../../models/user';
import { HttpRequest, HttpResponse, I_Controller } from '../protocols';
import { I_DeleteUserRepository } from './protocols'

export class DeleteUserController implements I_Controller{
  constructor(private readonly deleteUserRepository:I_DeleteUserRepository){}
  
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest.params?.id

      if(!id){
        return {
          statusCode: 400,
          body: 'Missing user id'
        }
      }

      const user = await this.deleteUserRepository.deleteUser(id)

      return {
        statusCode:200,
        body: user
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something wet wrong'
      }
    }
  }

}