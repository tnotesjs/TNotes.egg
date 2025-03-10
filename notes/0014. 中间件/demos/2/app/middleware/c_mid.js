module.exports = (options, app) => {
  return async (ctx, next) => {
    console.log('C: 请求开始')
    await next() // 等待后续中间件执行
    console.log('C: 响应结束')
  }
}
