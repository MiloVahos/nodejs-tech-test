const express = require('express')

const mainRouter = express()

mainRouter.use('/user', require('./users/UsersRouter'))
mainRouter.use('/task', require('./tasks/TasksRouter'))

module.exports = mainRouter