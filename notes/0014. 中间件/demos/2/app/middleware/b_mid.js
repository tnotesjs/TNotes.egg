module.exports = (options, app) => {
  return async (ctx, next) => {
    console.log('B: 请求开始')
    await next() // 等待后续中间件执行
    console.log('B: 响应结束')
  }
}
