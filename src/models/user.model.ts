import * as mongoose from 'mongoose'

export type TUser = {
  name?: string
  surname?: string
  username: string
  password: string
  profilePicture?: string
  roles?: string[]
}

const userSchema = new mongoose.Schema({
  name: { type: String },
  surname: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  roles: [{ type: String }],
})

const UserModel = mongoose.model('user', userSchema)

export default UserModel
