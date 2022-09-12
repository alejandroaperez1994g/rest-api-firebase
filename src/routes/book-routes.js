const Router = require('express').Router

const bookController = require('../controller/book-controller')
const { authMiddleware } = require('../middleware/auth-middleware')
const BookRouter = Router()

BookRouter.get('/books', authMiddleware, bookController.getBooks)

module.exports = BookRouter
