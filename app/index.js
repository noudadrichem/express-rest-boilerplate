import express from 'express'
import bodyParser from 'body-parser'
import Promise from 'bluebird'

import log from './log'
import routes from './routes'
import middleware from './middlewares'
import { http } from '../config'

export default function initApp() {
  const app = express()

  app.use(bodyParser.json())
  app.use(middleware)
  app.use('/v1', routes)

  const PORT = http.port || process.env.PORT
  app.listen(PORT, () => log.info(`Data provided on http://localhost:${PORT}`))
}
