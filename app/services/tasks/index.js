import { Router as router } from 'express'
import Task from '../../models/tasks'
import actions from './actions.js'

export default function taskController() {
  const tasks = router()

  tasks.get('/', function getAllTasks(request, response) {
    response.json({ message: 'yeay' })
    // actions.getAllTasks()
    //   .then(tasks => {
    //     log.info({ tasks })
    //     response.json({ tasks })
    //   })
    //   .catch(err => {
    //     log.error({ err })
    //     response.json({ err })
    //   })
  })

  return tasks
}
