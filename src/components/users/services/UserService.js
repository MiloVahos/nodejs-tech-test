const { saveUser } = require('../dao/UserDao')

const createNewUser = async (user) => {
  const newUser = await saveUser(user)
  return newUser
}

module.exports = { createNewUser }