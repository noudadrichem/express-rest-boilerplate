import { createLogger } from 'bunyan'
import { logger } from '../config'

const log = createLogger({
  name: logger.name,
  level: logger.level
})

export default log
