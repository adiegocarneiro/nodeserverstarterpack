import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import Routes from '../routes/routes.js'
import environment from '../env.js'

import database from '../database/db.js'
const connection = database(environment)

const app = express()

app.use(express.static('public'))

// helmet for security
app.use(helmet())

// cors for cors
app.use(cors())

// json responses
app.use(express.json())

// parser for json
app.use(bodyParser.urlencoded({ extended: true }))

// morgan for logging
app.use(morgan('combined'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // em producao, trocar pelo dominio do app
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


const client = await connection.connect()
console.log(client)

Routes(app)
