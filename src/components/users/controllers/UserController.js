const { createUser, getUser, updateUser, deleteUser, authUser } = require('../services/UserService')

const postUser = async (req, res) => {
  const user = req.body
  const response = await createUser(user)
  res.status(200).json(response)
}

const getUserById = async (req, res) => {
  const id = req.params.id
  const response = await getUser(id)
  res.status(200).json(response)
}

const authUserByEmailAndPassword = async (req, res) => {
  const userData = req.body
  const response = await authUser(userData)
  res.status(200).json(response)
}

const putUserById = async (req, res) => {
  const id = req.params.id
  const updateUserData = req.body
  const response = await updateUser(id, updateUserData)
  res.status(200).json(response)
}

const deleteUserById = async (req, res) => {
  const id = req.params.id
  const response = await deleteUser(id)
  res.status(200).json(response)
}

module.exports = { postUser, getUserById, putUserById, deleteUserById, authUserByEmailAndPassword }