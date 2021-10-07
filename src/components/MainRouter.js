const express = require('express')

const mainRouter = express()

mainRouter.use('/user', require('./users/UsersRouter'))

module.exports = mainRouter