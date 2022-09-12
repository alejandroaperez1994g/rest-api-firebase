const app = require('./server')
const config = require('./config/config')
const connect = require('./db/connect')

connect().then(async function onServerInit () {
  config.logger.info('DB connected')

  app.listen(config.app.PORT, () => {
    config.logger.info(`⚙️ Server runnig at http:localhost:${config.app.PORT}`)
  })
})
