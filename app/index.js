import Promise from 'bluebird'
import restify from 'restify'
import Virgilio from 'virgilio'

const fs = Promise.promisifyAll(require('fs'), {
  suffix: 'Promise'
});

const server = restify.createServer();
const APP_PORT = 9098

const options = {
  logger: { level: 10, name: 'EXAMPLE' },
  server
}

const virgilio = new Virgilio(options)

const isNoDirectory = file => !file.includes('.')

export default function appInit() {

  return fs.readdirPromise('./app')
    .filter(isNoDirectory)
    .map(dir => mountBaseDirectory(dir))
    .then(server.listen(APP_PORT, function handleListenSuccess() {
      virgilio.log$.info(`Magic provided on port ${APP_PORT}`)
    }))
    .catch(function handleInitError(error) {
      virgilio.log$.error({
        error
      }, 'Mounting error');
    })

}

function mountBaseDirectory(directoryName) {
  return fs.readdirPromise(`./app/${directoryName}`)
    .filter(isNoDirectory)
    .map(function handleBaseDirectoryItem(directoryItem) {
      const mountableModule = require(`./${directoryName}/${directoryItem}`).default
      try {
        virgilio.loadModule$(mountableModule)
        return
      } catch(error) {
        virgilio.log$.error({ message: 'Something went wrong', error, })
      }
    })
}
