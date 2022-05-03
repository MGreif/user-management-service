const { HttpError, NotFoundError } = require('../errorHandler')
const UserService = require('../services/user.service')
const bcrypt = require('bcrypt')

const createUser = async (req, res, next) => {
  try {
    const { body } = req
    const passwordRaw = body.password
    const bcryptedPassword = await bcrypt.hash(passwordRaw, 12)
    const result = await UserService.createUser({
      ...body,
      password: bcryptedPassword,
    })
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getUsers = async (req, res, next) => {
  try {
    const { query } = req
    const result = await UserService.getUsers(query)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) throw new NotFoundError(id)

    const result = await UserService.deleteUser(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    if (!id) throw new NotFoundError(id)

    const result = await UserService.updateUser(id, body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { createUser, getUsers, deleteUser, updateUser }
