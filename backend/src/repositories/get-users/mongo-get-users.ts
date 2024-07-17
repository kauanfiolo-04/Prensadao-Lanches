import { I_GetUsersRepository } from '../../controllers/get-users/protocols'
import { User } from '../../models/user';

export class MongoGetUsersRepository implements I_GetUsersRepository{
  async getUsers(): Promise<User[]> {
    return [{
      firstName: 'Kauan',
      lastName: 'Fiolo',
      email: 'kauan@testando.com',
      password: '123'
    }]
  }
}