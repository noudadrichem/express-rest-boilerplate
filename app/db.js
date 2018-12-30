import mongoose from 'mongoose';
import Promise from 'bluebird'
import { database } from '../config'

export default function initializeDatabaseConnectino() {
  mongoose.Promise = Promise
  const { username, password, host, port, name } = database
  const URL = `mongodb://${username !== '' ? `${username }:${password}@` : ''}${host}:${port}/${name}`

  return new Promise((resolve, reject) => {
    const db = mongoose.connect(URL, {
      useMongoClient: true
    })
    if(db) {
      console.log('Database connected succesfully')
      resolve(db)
    } else {
      reject()
    }
  })
}
