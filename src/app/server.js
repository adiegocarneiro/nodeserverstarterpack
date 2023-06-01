import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import Routes from '../routes/routes.js'

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

Routes(app)

app.listen(process.env.PORT | 3080, () => {
    console.log('Server listening on port ', process.env.PORT | 3080)
})