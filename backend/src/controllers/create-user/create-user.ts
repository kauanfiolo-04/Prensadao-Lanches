import validator from 'validator'
import { User } from '../../models/user'
import { HttpRequest, HttpResponse, I_Controller } from '../protocols'
import { CreateUserParams, I_CreateUserRepository } from './protocols'

export class CreateUserController implements I_Controller{
  constructor(private readonly createUserRepository: I_CreateUserRepository){}

  async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>> {
    try{
      // verificar campos obrigatórios
      const requiredFields = ['firstName', 'lastName', 'email', 'password']

      for(const field of requiredFields){
        if(!httpRequest?.body?.[field as keyof CreateUserParams]?.length){
          return {
            statusCode: 400,
            body: `Field ${field} is required`
          }
        }
      }

      // verificar se o email é válido
      const emailIsValid = validator.isEmail(httpRequest.body!.email)

      if(!emailIsValid){
        return {
          statusCode: 400,
          body: 'E-mail is invalid'
        }
      }

      const user = await this.createUserRepository.createUser(httpRequest.body!)

      return {
        statusCode: 201,
        body: user
      }
    }catch(error){
      return {
        statusCode: 500,
        body: 'Something went wrong'
      }
    }
  }
}