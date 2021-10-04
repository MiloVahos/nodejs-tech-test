const { saveUser, getUser } = require('../dao/UserDao')
const boom = require('@hapi/boom')

const createNewUser = async (user) => {
  const newUser = await saveUser(user)
  return newUser
}

const getUserById = async (id) => {
  const user = await getUser(id)
  if (!user) throw boom.notFound(`User with id ${id} not found`)
  return user
}

module.exports = { createNewUser, getUserById }