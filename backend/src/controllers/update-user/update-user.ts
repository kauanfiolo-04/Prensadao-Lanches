import { badRequest, ok, serverError } from '../../helpers/controllerResponses'
import { User } from '../../models/user'
import { HttpRequest, HttpResponse, I_Controller } from '../protocols'
import { I_UpdateUserRepository, UpdateUserParams } from './protocols'

export class UpdateUserController implements I_Controller{
  constructor(private readonly updateUserRepository: I_UpdateUserRepository){}
  async handle(httpRequest: HttpRequest<UpdateUserParams>): Promise<HttpResponse<User|string>> {
    try {
      const id = httpRequest?.params?.id
      const body = httpRequest?.body

      if(!body){
        return badRequest('Missing fields')
      }
      
      if(!id){
        return badRequest('Missing user id')
      }

      const allowedFieldsToUpdate: (keyof UpdateUserParams)[] = ['firstName', 'lastName', 'password']
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(key=>!allowedFieldsToUpdate.includes(key as keyof UpdateUserParams))

      if(someFieldIsNotAllowedToUpdate){
        return badRequest('Some received field is not allowed')
      }

      const user = await this.updateUserRepository.updateUser(id, body)

      return ok<User>(user)
      
    } catch (error) {
      return serverError()
    }
  }

}