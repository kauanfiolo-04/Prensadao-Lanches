import { I_Controller } from '../protocols'
import { I_GetUsersRepository } from './protocols'

export class GetUsersController implements I_Controller{
  constructor(private readonly getusersRepository: I_GetUsersRepository){}

  async handle() {
    // validar requisição
    // direcionar chamada para o Repository
    try {
      const users= await this.getusersRepository.getUsers()

      return{
        statusCode: 200,
        body: users
      }
    } catch(error) {
      return{
        statusCode: 500,
        body: 'Something went wrong.'
      }
    }
  }
}