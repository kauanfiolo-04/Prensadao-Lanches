import { ok, serverError } from '../../helpers/controllerResponses'
import { Item } from '../../models/item'
import { HttpResponse, I_Controller } from '../protocols'
import { I_GetItemsRepository } from './protocols'

export class GetItemsController implements I_Controller{
  constructor(private readonly getItemsRepository:I_GetItemsRepository){}
  
  async handle(): Promise<HttpResponse<Item[] | string>> {
    try {
      const items = await this.getItemsRepository.getItems()

      return ok<Item[]>(items)
    } catch (error) {
      return serverError()
    }
  }

}