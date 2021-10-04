const { createNewUser, getUserById } = require('../services/UserService')

const createUser = async (req, res) => {
  const user = req.body
  const newUser = await createNewUser(user)
  res.status(200).json(newUser)
}

const getUser = async (req, res) => {
  const id = req.params.id
  const user = await getUserById(id)
  res.status(200).json(user)
}

module.exports = { createUser, getUser }