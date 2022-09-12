const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const { json } = require('body-parser')
const cors = require('cors')

const bookRouter = require('./routes/book-routes')
const userRouter = require('./routes/user-routes')

// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(json())
app.use(cors())

app.use(bookRouter)
app.use(userRouter)

module.exports = app
