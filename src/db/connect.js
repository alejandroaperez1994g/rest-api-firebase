const mongoose = require('mongoose')

function connect () {
  return mongoose.connect('mongodb://localhost:27017/myApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connect
