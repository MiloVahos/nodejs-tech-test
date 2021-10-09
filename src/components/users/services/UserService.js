const { saveUser, getUserById, getUserByEmail, updateUserById, deleteUserById } = require('../dao/UserDao')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const createUser = async (user) => {
  const { password } = user
  const currentUser = await getUserByEmail(user.email)
  if (currentUser) throw boom.badRequest('User email already exists')
  try {
    const hash = bcrypt.hashSync(password, 10)
    user.password = hash
    const newUser = await saveUser(user)
    delete newUser.password
    return newUser
  } catch (e) {
    throw boom.badImplementation('Something went wrong with the application')
  }
}

const getUser = async (id) => {
  const user = await getUserById(id)
  if (!user) throw boom.notFound(`User with id ${id} not found`)
  return user
}

const authUser = async (userData) => {
  const { email, password } = userData
  const user = await getUserByEmail(email)
  if (!user) return { auth: false }
  const validPass = bcrypt.compareSync(password, user.password);
  if (!validPass) return { auth: false }
  delete user.password
  return { auth: true, user }
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

module.exports = { createUser, getUser, updateUser, deleteUser, authUser }