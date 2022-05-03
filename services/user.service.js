const UserModel = require("../models/user.model")

const createUser = async (userData = {}) => {
  const result = await UserModel.create(userData)
  return result
}

const getUsers = async (filter = {}) => {
  const result = await UserModel.find(filter)
  return result
} 

const deleteUser = async (id) => {
  const result = await UserModel.deleteOne({ _id: id })
  return result
}

const updateUser = async (id, updateData = {}) => {
  const result = await UserModel.updateOne({ _id: id }, { $set: updateData })
  return result
}

module.exports = { createUser, getUsers, deleteUser, updateUser }