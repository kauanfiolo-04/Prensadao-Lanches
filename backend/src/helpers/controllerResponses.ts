import { HttpResponse, HttpStatusCode } from "../controllers/protocols"

export const ok = <T>(body: any):HttpResponse<T> => ({statusCode:HttpStatusCode.OK, body})

export const created = <T>(body: any):HttpResponse<T> => ({statusCode:HttpStatusCode.CREATED, body})

export const badRequest = (message:string):HttpResponse<string> => ({statusCode: HttpStatusCode.BAD_REQUEST, body: message})

export const serverError = ():HttpResponse<string> => ({statusCode:HttpStatusCode.SERVER_ERROR, body:'Something went wrong'})