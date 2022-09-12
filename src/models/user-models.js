const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  _id: String,
  firstName: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  }
})

const UserModel = new mongoose.model('user', UserSchema)

module.exports = UserModel
