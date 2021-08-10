import http from 'http'
import app from './app'
import { sequelize, testDBConnection } from './models'
import Config from './config'

const server = http.createServer(app.callback())

server.listen(Config.port, () => {
  console.log(`Server start on port ${Config.port}...`)
  testDBConnection(sequelize)
})
