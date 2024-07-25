import { badRequest, ok, serverError } from '../../helpers/controllerResponses';
import { Item } from '../../models/item';
import { HttpRequest, HttpResponse, I_Controller } from '../protocols'
import { I_UpdateItemRepository, UpdateItemParams } from './protocols';

export class UpdateItemController implements I_Controller{
  constructor(private readonly updateItemRepository:I_UpdateItemRepository){}
  
  async handle(httpRequest: HttpRequest<UpdateItemParams>): Promise<HttpResponse<Item | string>> {
    try {
      const id = httpRequest?.params?.id
      const body = httpRequest?.body

      if(!body){
        return badRequest('Missing fields')
      }

      if(!id){
        return badRequest('Missing item id')
      }

      const allowedFieldsToUpdate: (keyof UpdateItemParams)[] = ['name', 'category', 'image', 'price']

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(key=>!allowedFieldsToUpdate.includes(key as keyof UpdateItemParams))

      if(someFieldIsNotAllowedToUpdate){
        return badRequest('Some received field is not allowed')
      }

      const item = await this.updateItemRepository.updateItem(id, body)

      return ok<Item>(item)
    } catch (error) {
      return serverError()
    }
  }
}