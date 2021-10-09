const Joi = require('joi')
const { ADMIN_ROLE, USER_ROLE } = require('../../../utils/constants')

const createUserSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'any.required': 'Name is required'
  }),
  lastName: Joi.string().trim().required().messages({
    'any.required': 'Last name is required'
  }),
  email: Joi.string().trim().email().regex(/^[\w.+\-]+@lean-tech\.io$/).required().messages({
    'string.pattern.base': 'Email must be from Lean Tech',
    'any.required': 'Email is required'
  }),
  password: Joi.string().trim().required().messages({
    'any.required': 'Password is required'
  }),
  role: Joi.string().trim().required().valid(USER_ROLE, ADMIN_ROLE).messages({
    'any.required': 'Role is required'
  }),
})

module.exports = createUserSchema