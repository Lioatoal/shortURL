import path from 'path'

// koa
import Koa from 'koa'
import logger from 'koa-logger'
import views from 'koa-views'
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static2'
import favicon from 'koa-favicon'
import cors from '@koa/cors'
import session from 'koa-session'

// unit
import middleware from './middleware'
import router from './routes'

const app = new Koa()

app.keys = ['my_koa_secret_string']
app.proxy = true

app
  .use(logger())
  .use(middleware.errorHandler)
  .use(bodyParser({
    jsonLimit: '5mb',
    formLimit: '5mb',
    textLimit: '5mb',
  }))
  .use(session({
    key: 'cms_project_key',
    maxAge: 24 * 60 * 60 * 1000,
  }, app))
  .use(serve('public', path.resolve(__dirname, '../public')))
  .use(favicon(`${path.resolve(__dirname, '../public')}/favicon.ico`))
  .use(views(`${path.resolve(__dirname, '../views')}`, { extension: 'ejs' }))
  .use(cors({ credentials: true }))
  .use(router())

app.on('error', (err, ctx) => {
  const { message } = err
  const { method, url, body } = ctx.request

  console.error(`error: ${message}, method: ${method}, url: ${url}, body:`, body)
})

export default app
