const { Router } = require('express')
const { createUser, getUser } = require('../users/controllers/UserController')
const { validateSchemaBody, vali, validateSchemaParams } = require('../../utils/Validators')
const { catchErrors } = require('../../utils/ErrorHandler')
const createUserSchema = require('./schemas/createUserSchema')
const idSchema = require('./schemas/idSchema')

const router = Router()

router.post(
  '/',
  validateSchemaBody(createUserSchema),
  catchErrors(createUser)
)

router.get(
  '/:id',
  validateSchemaParams(idSchema),
  catchErrors(getUser)
)

router.put('', () => null)

router.delete('', () => null)

module.exports = router