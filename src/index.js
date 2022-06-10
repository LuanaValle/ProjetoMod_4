// Importando o framework
import express from "express";

//Importando CORS
import cors from 'cors'

import StatusController from "./controllers/status_controller.js";

// importando os middlewares

import db from './database/sqlite_db.js'

// Instanciando/criando servidor
const app = express()
// Escolhendo a porta
const port = 3000

// Middleware necessario para fazer o parser do 
// JSON recebido do body em objeto
app.use(express.json())

const corsOptions = {
    origin: ["http://front-end-exemplo.com.br/"]
}

app.use(cors(corsOptions))

// Chamada dos Middlewares especificos das rotas
 // vai ser rodados em todas as rotas

// chamando os controllers passando o servidor (app) 
// e o banco de dados (bd) como parâmetro
StatusController(app, db)

// Abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})