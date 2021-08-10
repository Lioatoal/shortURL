import errorName from '../../errorCode.json'

export const offSetAndLimit = async (ctx, next) => {
  ctx.query.offset = Number(ctx.query.offset) || 0
  ctx.query.limit = Number(ctx.query.limit) || 20

  await next()
}

export const fetchErrorCode = async (ctx, next) => {
  ctx.errorName = errorName

  await next()
}
