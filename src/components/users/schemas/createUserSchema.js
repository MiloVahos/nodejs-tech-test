const Joi = require('joi')

const createUserSchema = Joi.object({
  name: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().trim().email().regex(/^[\w.+\-]+@lean-tech\.io$/).required()
})

module.exports = createUserSchema