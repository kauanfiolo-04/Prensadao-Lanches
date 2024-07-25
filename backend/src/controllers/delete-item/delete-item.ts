import { badRequest, ok, serverError } from '../../helpers/controllerResponses';
import { Item } from '../../models/item';
import { HttpRequest, HttpResponse, I_Controller } from '../protocols'
import { I_DeleteItemRepository } from './protocols';

export class DeleteItemController implements I_Controller{
  constructor(private readonly deleteItemRepository:I_DeleteItemRepository){}
  
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Item | string>> {
    try {
      const id = httpRequest?.params?.id

      if(!id){
        return badRequest('Missing item id')
      }

      const item = await this.deleteItemRepository.deleteItem(id)

      return ok<Item>(item)
    } catch (error) {
      return serverError()
    }
  }
  
}