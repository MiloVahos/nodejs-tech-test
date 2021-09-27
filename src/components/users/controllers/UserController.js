const { createNewUser } = require('../services/UserService')

const createUser = async (req, res) => {
  const user = req.body
  const newUser = await createNewUser(user)
  res.json(newUser)
}

module.exports = { createUser }