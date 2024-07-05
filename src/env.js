import dotenv from 'dotenv'
dotenv.config()

const environment = {
  dbUser: process.env.DBUSER,
  dbPass: process.env.DBPASS,
  dbPort: process.env.DBPORT,
  dbName: process.env.DBNAME,
  dbHost: process.env.DBHOST
}

export default environment