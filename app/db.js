import mongoose from 'mongoose';
import Promise from 'bluebird'
import { database } from '../config'

export default function initializeDatabaseConnectino({ log }) {
  mongoose.Promise = Promise
  const { username, password, host, port, name } = database
  const URL = `mongodb://${username !== '' ? `${username || process.env.MONGODB_USER }:${password || process.env.MONGODB_PASS}@` : ''}${host}:${port}/${name}`

  const JA = process.env.MONGO_URL || URL
  console.log({ JA })
  return new Promise((resolve, reject) => {
    mongoose.connect(JA, { useMongoClient: true })
      .then(db => {
        log.info('Database connected succesfully')
        resolve(db)
      }).catch(err => {
        log.error('Database connection failed', { err })
        reject(err)
      })
  })
}
