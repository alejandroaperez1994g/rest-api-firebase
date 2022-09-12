const db = require('../models')
const { logger } = require('../config/config')

async function signUp (req, res, next) {
  const { uid, name, email } = req.user

  try {
    const user = await db.User.findOne({ email })

    if (user) {
      return res.status(200)
    }

    const newUser = await db.User.create({
      _id: uid,
      name,
      email
    })

    logger.debug(newUser)

    res.status(200)
    res.send({ data: { name, email } })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  SignUp: signUp
}
