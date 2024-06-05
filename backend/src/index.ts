import express from 'express'
import cors from 'cors'
import itemsRouter from './routers/items-router'

const port=3000

const app=express()

app.use(cors({
  origin: '*'
}))

app.use('/api',itemsRouter)

// resposta padrão pra qualquer outra req
app.use((req, res) => {
  return res.status(404)
})

app.listen(port, ()=>{
  console.log(`Servidor rodando com sucesso na porta.................${port}`)
})