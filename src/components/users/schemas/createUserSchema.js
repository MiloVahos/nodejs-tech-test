const Joi = require('joi')

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
})

module.exports = createUserSchema