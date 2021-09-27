const express = require('express')

const mainRouter = express()

mainRouter.use('./users/UsersRouter')

module.exports = mainRouter