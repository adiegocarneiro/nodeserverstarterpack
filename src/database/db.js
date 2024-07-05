import pg from 'pg'
const { Pool } = pg

export default (environment) => {
  return new Pool({
    connectionString: `postgres://${environment.dbUser}:${environment.dbPass}@${environment.dbHost}:${environment.dbPort}/${environment.dbName}`
  })

}