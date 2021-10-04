const Joi = require('joi')

const idSchema = Joi.object({
  id: Joi.number().required().messages({
    'any.required': 'Please provide the user id',
  })
});

module.exports = idSchema