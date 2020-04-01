const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())

/*
Metodos HTTP:

GET: buscar uma informação do back-end
POST: criar uma informação no back-end
PUT: alterar uma informação no back-end
DELETE: deletar uam informação no backend

*/

/**
 * Tipos de parâmetros:
 * 
 * Query: prâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos
 * 
 */

app.use(routes)
app.listen(3333)