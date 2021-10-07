const { Router } = require('express')
const { postUser, getUserById, putUserById, deleteUserById } = require('../users/controllers/UserController')
const { validateSchemaBody, validateSchemaParams } = require('../../utils/Validators')
const { catchErrors } = require('../../utils/ErrorHandler')
const createUserSchema = require('./schemas/createUserSchema')
const idSchema = require('./schemas/idSchema')
const updateUserSchema = require('./schemas/updateUserSchema')

const router = Router()

router.post(
  '/',
  validateSchemaBody(createUserSchema),
  catchErrors(postUser)
)

router.get(
  '/:id',
  validateSchemaParams(idSchema),
  catchErrors(getUserById)
)

router.put(
  '/:id',
  validateSchemaBody(updateUserSchema),
  validateSchemaParams(idSchema),
  catchErrors(putUserById)
)

router.delete(
  '/:id',
  validateSchemaParams(idSchema),
  catchErrors(deleteUserById)
)

module.exports = router