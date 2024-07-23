import validator from 'validator'
import { User } from '../../models/user'
import { HttpRequest, HttpResponse, I_Controller } from '../protocols'
import { CreateUserParams, I_CreateUserRepository } from './protocols'
import { badRequest, created, serverError } from '../../helpers/controllerResponses'

export class CreateUserController implements I_Controller{
  constructor(private readonly createUserRepository: I_CreateUserRepository){}

  async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User | string>> {
    try{
      // verificar campos obrigatórios
      const requiredFields = ['firstName', 'lastName', 'email', 'password']

      for(const field of requiredFields){
        if(!httpRequest?.body?.[field as keyof CreateUserParams]?.length){
          return badRequest(`Field ${field} is required`)
        }
      }

      // verificar se o email é válido
      const emailIsValid = validator.isEmail(httpRequest.body!.email)

      if(!emailIsValid){
        return badRequest('E-mail is invalid')
      }

      const user = await this.createUserRepository.createUser(httpRequest.body!)

      return created<User>(user)
    }catch(error){
      return serverError()
    }
  }
}