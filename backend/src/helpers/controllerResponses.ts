import { HttpResponse } from "../controllers/protocols"

export const ok = <T>(body: any):HttpResponse<T> => ({statusCode:200, body})

export const created = <T>(body: any):HttpResponse<T> => ({statusCode:201, body})

export const badRequest = (message:string):HttpResponse<string> => ({statusCode: 400, body: message})

export const serverError = ():HttpResponse<string> => ({statusCode:500, body:'Something went wrong'})