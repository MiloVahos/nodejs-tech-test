const express = require('express')
const jwtCheck = require('../utils/AuthValidator')

const mainRouter = express()

mainRouter.use(jwtCheck)
mainRouter.use('/user', require('./users/UsersRouter'))

module.exports = mainRouter