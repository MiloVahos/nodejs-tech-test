const User = require('../models/UserModel')

const saveUser = async (user) => {
  const userModel = await User.create(user)
  return await userModel.get({ plain: true })
}

const getUser = async (id) => {
  const userModel = await User.findOne({ where: { id }})
  if (!userModel) return null
  return await userModel.get({ plain: true })
}

module.exports = { saveUser, getUser }