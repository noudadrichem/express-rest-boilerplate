module.exports = {
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'acceptance', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  logger: {
    level: {
      doc: 'The log level to output.',
      format: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
      default: 'trace',
      env: 'APP_LOG_LEVEL'
    },
    name: {
      doc: 'Logger name',
      default: 'REST BOILER',
      env: 'APP_LOGGER_NAME'
    }
  },
  database: {
    host: {
      doc: '',
      default: 'localhost',
      format: String,
      env: 'DATABASE_HOST'
    },
    port: {
      doc: '',
      default: 27017,
      format: 'int',
      env: 'DATABASE_PORT'
    },
    name: {
      doc: '',
      default: 'rest-boiler',
      format: String,
      env: 'DATBASE_NAME'
    },
    username: {
      doc: '',
      default: '',
      format: String,
      env: 'MONGODB_USER'
    },
    password: {
      doc: '',
      default: '',
      format: String,
      env: 'MONGODB_PASS'
    },
    url: {
      doc: 'Mongo db connection URL',
      default: 'mongodb://mongodb:27017/rest-boiler',
      format: String,
      env: 'MONGO_URL'
    }
  },
  http: {
    port: {
      doc: 'The port the application runs at.',
      format: 'int',
      default: 9094,
      env: 'PORT'
    }
  }
};
