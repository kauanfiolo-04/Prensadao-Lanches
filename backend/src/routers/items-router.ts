import express from 'express'

const itemsRouter = express.Router()

itemsRouter.post('/item',(req,res)=>{
  return res.send(`Cria novo item`)
})

itemsRouter.get('/items',(req,res)=>{
  return res.send(`Le todos os items`)
})

itemsRouter.get('/items/:id',(req,res)=>{
  const id=+req.params.id
  return res.send(`Le item de id:${id}`)
})

itemsRouter.put('/items/:id',(req,res)=>{
  const id=+req.params.id
  return res.send(`Atualiza o item ${id}`)
})

itemsRouter.delete('/items/:id',(req,res)=>{
  const id=+req.params.id
  return res.send(`Apaga o item ${id}`)
})

export default itemsRouter