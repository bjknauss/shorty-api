const { Pool } = require('pg')
const config = require('../config')

const db = config.get('db')

const pool = new Pool({
  host: db.host,
  password: db.password,
  database: db.dbName,
  user: db.user,
})

module.exports = pool
