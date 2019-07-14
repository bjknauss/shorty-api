const schema = {
  db: {
    host: {
      format: 'url',
      default: 'localhost',
      doc: 'Database connection string.',
      env: 'SHORTY_DB_HOST',
    },
    password: {
      format: String,
      default: 'shorty-password',
      doc: 'Database password',
      env: 'SHORTY_DB_PASSWORD',
    },
    port: {
      format: 'int',
      default: 5432,
      doc: 'Database port',
      env: 'SHORTY_DB_PORT',
    },
    dbName: {
      format: String,
      default: 'shorty',
      doc: 'Name of the database to use',
      env: 'SHORTY_DB_DATABASE_NAME',
    },
    user: {
      format: String,
      default: 'shorty-user',
      doc: 'User to authenticate with',
      env: 'SHORTY_DB_USER',
    },
  },
  port: {
    format: 'int',
    default: '80',
    doc: 'Port the Shorty API webserver listens to.',
  },
  nodeEnv: {
    format: String,
    default: 'development',
    doc: 'The NODE_ENV setting',
    env: 'NODE_ENV',
  },
  configFile: {
    format: String,
    default: '',
    env: 'SHORTY_CONFIG_FILE',
  },
}

module.exports = schema
