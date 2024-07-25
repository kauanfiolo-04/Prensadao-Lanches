import { UpdateUserController } from './controllers/update-user/update-user'
import express from 'express'
import { config } from 'dotenv'
import { GetUsersController } from './controllers/get-users/get-users'
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users'
import { MongoClient } from './database/mongo'
import { MongoCreateUserRepository } from './repositories/create-user/mongo-create-user'
import { CreateUserController } from './controllers/create-user/create-user'
import { MongoUpdateUserRepository } from './repositories/update-user/mongo-update-user'
import { MongoDeleteUserRepository } from './repositories/delete-user/mongo-delete-user'
import { DeleteUserController } from './controllers/delete-user/delete-user'
import { MongoCreateItemRepository } from './repositories/create-item/mongo-create-item'
import { CreateItemController } from './controllers/create-item/create-item'
import { MongoGetItemsRepository } from './repositories/get-items/mongo-get-items'
import { GetItemsController } from './controllers/get-items/get-items'
import { MongoDeleteItemRepository } from './repositories/delete-item/mongo-delete-item'
import { DeleteItemController } from './controllers/delete-item/delete-item'
import { MongoUpdateItemRepository } from './repositories/update-item/mongo-update-item'
import { UpdateItemController } from './controllers/update-item/update-item'

const main = async ()=>{
  config()

  const app= express()

  app.use(express.json())

  await MongoClient.connect()

  // USERS ROUTES
  app.get('/users', async (req,res)=>{
    const mongoGetUsersRepository = new MongoGetUsersRepository()

    const getUsersController = new GetUsersController(mongoGetUsersRepository)

    const { body, statusCode } = await getUsersController.handle()

    res.status(statusCode).send(body)
  })

  app.post('/users', async (req,res)=>{
    const mongoCreateUserRepository = new MongoCreateUserRepository()

    const createUserController = new CreateUserController(mongoCreateUserRepository)

    const { body, statusCode } = await createUserController.handle({body: req.body})
  
    res.status(statusCode).send(body)
  })

  app.patch('/users/:id',async (req,res)=>{
    const mongoUpdateUserRepository=new MongoUpdateUserRepository()

    const updateUserController= new UpdateUserController(mongoUpdateUserRepository)

    const { body, statusCode } = await updateUserController.handle({body: req.body, params: req.params})

    res.status(statusCode).send(body)
  })

  app.delete('/users/:id',async (req,res)=>{
    const mongoDeleteUserRepository = new MongoDeleteUserRepository()

    const deleteUserController = new DeleteUserController(mongoDeleteUserRepository)

    const { body, statusCode } = await deleteUserController.handle({params: req.params})

    res.status(statusCode).send(body)
  })

  // ITEMS ROUTES
  app.get('/items', async (req,res)=>{
    const mongoGetItemsRepository = new MongoGetItemsRepository()

    const getItemController = new GetItemsController(mongoGetItemsRepository)

    const { body, statusCode } = await getItemController.handle()

    res.status(statusCode).send(body)
  })

  app.post('/items', async (req,res)=>{
    const mongoCreateItemRepository = new MongoCreateItemRepository()

    const createItemController = new CreateItemController(mongoCreateItemRepository)

    const { body, statusCode } = await createItemController.handle({body: req.body})

    res.status(statusCode).send(body)
  })

  app.patch('/items/:id', async (req,res)=>{
    const mongoUpdateItemRepository = new MongoUpdateItemRepository()

    const updateItemController = new UpdateItemController(mongoUpdateItemRepository)

    const { body, statusCode } = await updateItemController.handle({body: req.body, params: req.params})

    res.status(statusCode).send(body)
  })

  app.delete('/items/:id', async (req,res)=>{
    const mongoDeleteItemRepository = new MongoDeleteItemRepository()

    const deleteItemController = new DeleteItemController(mongoDeleteItemRepository)

    const { body, statusCode } = await deleteItemController.handle({params: req.params})

    res.status(statusCode).send(body)
  })

  const port = process.env.PORT || 8000

  app.listen(port,()=>console.log(`listen on: http://localhost:${port}`))
}

main()