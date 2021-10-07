const Joi = require('joi')

const updateUserSchema = Joi.object({
  name: Joi.string().trim(),
  lastName: Joi.string().trim(),
})

module.exports = updateUserSchema