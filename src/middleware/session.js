// import moment from 'moment'
// import errorName from '../../errorCode.json'
import utils from '../utils'

// const env = process.env.NODE_ENV

export const authVerify = async (ctx, next) => {
  await utils.authorization(ctx)
  await next()
}
