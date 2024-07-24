import { badRequest, created, serverError } from '../../helpers/controllerResponses'
import { Item } from '../../models/item'
import { HttpRequest, HttpResponse, I_Controller } from '../protocols'
import { CreateItemParams, I_CreateItemRepository } from './protocols'

export class CreateItemController implements I_Controller{
  constructor(private readonly createItemRepository:I_CreateItemRepository){}

  async handle(httpRequest: HttpRequest<CreateItemParams>): Promise<HttpResponse<Item | string>> {
    try {
      const requiredFields=['name', 'category', 'image', 'price']
  
      for(const field of requiredFields){
        if(!httpRequest?.body?.[field as keyof CreateItemParams]){
          return badRequest(`Field ${field} is required`)
        }
      }
  
      const item = await this.createItemRepository.createItem(httpRequest.body!)
  
      return created<Item>(item)
    } catch (error) {
      return serverError()
    }
  }
}