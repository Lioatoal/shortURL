import IoRedis from 'ioredis'
import config from '../config'

const options = {
  host: config.redis.host,
  port: config.redis.port,
  maxRetriesPerRequest: 20,
}

class Redis {
  constructor() {
    this.client = new IoRedis(options)
    this.client.flushall()
    this.client.on('error', err => {
      console.error(`Redis Error: ${err}`)
    })
  }

  async getURL(_id) {
    const data = await this.client.get(_id)
    return data
  }

  async addURL(_id, newURL) {
    const obj = await this.client.exists(_id)
    if (!obj && newURL) await this.client.set(_id, newURL)
  }

  async deleteURL(_id) {
    const obj = await this.client.exists(_id)
    if (!obj) await this.client.del(_id)
  }
}

export default new Redis()
