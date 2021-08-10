import middleware from '../src/middleware'

describe('middleware', () => {
  describe('beforeAction', () => {
    test('offSetAndLimit', async () => {
      let ctx = { query: { limit: 50, offset: 70 }}, noop = () => {}
      await middleware.beforeAction.offSetAndLimit(ctx, noop)
      expect(ctx.query.limit).toEqual(50)
      expect(ctx.query.offset).toEqual(70)

      ctx = { query: { limit: 'aaa', offset: 'bbb' }}
      await middleware.beforeAction.offSetAndLimit(ctx, noop)
      expect(ctx.query.limit).toEqual(20)
      expect(ctx.query.offset).toEqual(0)
    })

    test('fetchErrorCode', async () => {
      let ctx = { errorName: ''}, noop = () => {}
      await middleware.beforeAction.fetchErrorCode(ctx, noop)
      expect(ctx.errorName.SUCCESS).toEqual({message: "操作成功!"})

      ctx = {}
      await middleware.beforeAction.fetchErrorCode(ctx, noop)
      expect(ctx.test).toEqual(undefined)
    })

  })
})
