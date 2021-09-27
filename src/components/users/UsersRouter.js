const { Router } = require('express')
const { createUser } = require('../users/controllers/UserController')
const { validateSchemaBody } = require('../utils/Validators')
const createUserSchema = require('./schemas/createUserSchema')

const router = Router()

router.post(
  '/',
  validateSchemaBody(createUserSchema),
  createUser
)

router.get('', () => 'null')

router.put('', () => null)

router.delete('', () => null)

module.exports = router