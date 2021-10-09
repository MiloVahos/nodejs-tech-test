const User = require('../models/UserModel')

const saveUser = async (user) => {
  const userModel = await User.create(user)
  return await userModel.get({ plain: true })
}

const getUserById = async (id) => {
  const userModel = await User.findOne({ where: { id }})
  if (!userModel) return null
  return await userModel.get({ plain: true })
}

const getUserByEmail = async (email) => {
  const userModel = await User.findOne({ where: { email }})
  if (!userModel) return null
  return await userModel.get({ plain: true })
}

const updateUserById = async (id, updateUserData) => {
  const userModel = await User.findOne({ where: { id }})
  if (!userModel) return null
  const updatedUser = await userModel.update(updateUserData)
  return await updatedUser.get({ plain: true })
}

const deleteUserById = async (id) => {
  const userModel = await User.findOne({ where: { id }})
  if (!userModel) return false
  await userModel.destroy()
  return true
}

module.exports = { saveUser, getUserById, getUserByEmail, updateUserById, deleteUserById }