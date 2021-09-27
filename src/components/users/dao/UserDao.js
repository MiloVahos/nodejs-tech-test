const User = require('../models/UserModel')

const saveUser = async (user) => {
  const userModel = await User.create(user)
  return await userModel.get({ plain: true })
}

module.exports = { saveUser }