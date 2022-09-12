const BookModel = require('../models/book-models')
const { logger } = require('../config/config')

async function getBooks (req, res, next) {
  try {
    const books = await BookModel.find({}).select({
      title: 1
    }).lean().exec()

    res.status(200).send({
      data: books
    })
    // console.log(BookModel.getBooks)
    // res.sendStatus(200)
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

module.exports = {
  getBooks
}
