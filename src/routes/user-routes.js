const Router = require('express').Router

const userController = require('../controller/user-controller')
const { authMiddleware } = require('../middleware/auth-middleware')
const UserRouter = Router()

UserRouter.get('/user/signup', authMiddleware, userController.SignUp)

module.exports = UserRouter
