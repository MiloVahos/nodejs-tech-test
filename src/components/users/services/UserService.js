const { saveUser, getUserById, updateUserById, deleteUserById } = require('../dao/UserDao')
const boom = require('@hapi/boom')

const createUser = async (user) => {
  const newUser = await saveUser(user)
  return newUser
}

const getUser = async (id) => {
  const user = await getUserById(id)
  if (!user) throw boom.notFound(`User with id ${id} not found`)
  return user
}

const updateUser = async (id, updateUserData) => {
  const updatedUser = await updateUserById(id, updateUserData)
  if (!updatedUser) throw boom.notFound(`User with id ${id} not found`)
  return updatedUser
}

const deleteUser = async (id) => {
  const deletedUser = await deleteUserById(id)
  if (!deletedUser) throw boom.notFound(`User with id ${id} not found`)
  return { message: `User with id ${id} was deleted`}
}

module.exports = { createUser, getUser, updateUser, deleteUser }