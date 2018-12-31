import mongoose from 'mongoose';
import Promise from 'bluebird'
import { database } from '../config'

export default function initializeDatabaseConnectino({ log }) {
  mongoose.Promise = Promise
  const { username, password, host, port, name } = database
  const generatedMongoUrl = `mongodb://${username !== '' ? `${username || process.env.MONGODB_USER }:${password || process.env.MONGODB_PASS}@` : ''}${host}:${port}/${name}`
  const URL = process.env.MONGO_URL || generatedMongoUrl

  return new Promise((resolve, reject) => {
    mongoose.connect(URL, { useMongoClient: true })
      .then(db => {
        log.info(`Database connected succesfully to ${URL}`)
        resolve(db)
      }).catch(err => {
        log.error('Database connection failed', { err })
        reject(err)
      })
  })
}
