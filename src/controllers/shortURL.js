import shortid from 'shortid'

import { sequelize } from '../models'
import ShortURL from '../models/shortURL'
import utils from '../utils'

export const createShortURL = async ctx => {
  const { errorName } = ctx
  const { orgURL } = ctx.request.body

  let newURL = ''
  const id = shortid.generate()

  if (!orgURL) ctx.throw(errorName.INVALID_EMPTY_PARAM)

  await utils.redis.addURL(id, orgURL)
  const check = await utils.redis.getURL(id)

  if (check) {
    newURL = id
    await ShortURL.create({
      orgUrl: orgURL,
      newUrl: newURL,
    })
  }
  

  ctx.body = {
    success: true,
    message: errorName.SUCCESS,
    newURL,
  }
}

export const getShortURL = async ctx => {
  const { errorName } = ctx
  const { id } = ctx.params

  let url = ''
  if (id) {
    url = await utils.redis.getURL(id)
  }

  if (!url) {
    console.log(`Set a new record in redis: ${id}`);
    const SQL = `SELECT orgUrl, newUrl
                   FROM short_url
                  WHERE newUrl = :id`
    const replacements = { id }
    const result = await sequelize.query(SQL, { replacements, type: sequelize.QueryTypes.SELECT })

    url = result.length ? result[0].orgUrl : ctx.throw(errorName.INVALID_EMPTY_DATA)
    await utils.redis.addURL(id, url)
  }

  ctx.redirect(url)
}
