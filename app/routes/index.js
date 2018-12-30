import express from 'express'
import Promise from 'bluebird'

import initializeDatabaseConnection from '../db'
import tasks from '../services/tasks'
import log from '../log'

const fs = Promise.promisifyAll(require('fs'), {
  suffix: 'Promise'
})

const controllers = {
  tasks
}

const controllerVariables = {
  log
}


function initRoutes(db) {
  const router = express()
  fs.readdirPromise('./app/services')
    .filter(file => !file.includes('.'))
    .then(function mountServicesToRoutes(directories) {
      directories.map(directoryName => {
        router.use(`/${directoryName}`, controllers[directoryName]({...controllerVariables, db}))
      })
    })
    .then(initializeDatabaseConnection)

  return router
}


export default initRoutes()
