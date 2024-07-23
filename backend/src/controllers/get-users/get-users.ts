import { ok, serverError } from '../../helpers/controllerResponses'
import { User } from '../../models/user'
import { HttpResponse, I_Controller } from '../protocols'
import { I_GetUsersRepository } from './protocols'

export class GetUsersController implements I_Controller{
  constructor(private readonly getusersRepository: I_GetUsersRepository){}

  async handle(): Promise<HttpResponse<User[]|string>> {
    // validar requisição
    // direcionar chamada para o Repository
    try {
      const users= await this.getusersRepository.getUsers()
      return ok<User[]>(users)
    } catch(error) {
      return serverError()
    }
  }
}