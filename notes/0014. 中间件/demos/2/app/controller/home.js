const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this
    
    console.log('内置中间件列表：', app.config.coreMiddlewares)
    console.log('最终起作用的中间件处理函数列表：', app.middleware)

    // A: 请求开始
    // B: 请求开始
    // C: 请求开始
    // 内置中间件列表： [
    //   'meta',
    //   'siteFile',
    //   'notfound',
    //   'static',
    //   'bodyParser',
    //   'overrideMethod',
    //   'session',
    //   'securities',
    //   'i18n',
    //   'eggLoaderTrace'
    // ]
    // 最终起作用的中间件处理函数列表： [
    //   [AsyncFunction: meta] { _name: 'meta' },
    //   [AsyncFunction: siteFile] { _name: 'siteFile' },
    //   [AsyncFunction: notfound] { _name: 'notfound' },
    //   [Function (anonymous)] { _name: 'static' },
    //   [AsyncFunction: bodyParser] { _name: 'bodyParser' },
    //   [Function: overrideMethod] { _name: 'overrideMethod' },
    //   [AsyncFunction: session] { _name: 'session' },
    //   [Function (anonymous)] { _name: 'securities' },
    //   [AsyncFunction (anonymous)] { _name: 'eggLoaderTrace' },
    //   [AsyncFunction (anonymous)] { _name: 'aMid' },
    //   [AsyncFunction (anonymous)] { _name: 'bMid' },
    //   [AsyncFunction (anonymous)] { _name: 'cMid' },
    //   [Function: dispatch] {
    //     router: EggRouter {
    //       opts: [Object],
    //       methods: [Array],
    //       params: {},
    //       stack: [Array],
    //       app: [Object],
    //       head: [Function (anonymous)],
    //       options: [Function (anonymous)],
    //       get: [Function (anonymous)],
    //       put: [Function (anonymous)],
    //       patch: [Function (anonymous)],
    //       post: [Function (anonymous)],
    //       delete: [Function (anonymous)],
    //       all: [Function (anonymous)]
    //     }
    //   }
    // ]
    // C: 响应结束
    // B: 响应结束
    // A: 响应结束

    ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
