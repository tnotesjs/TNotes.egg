const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this
    console.log(
      '内置中间件 - app.config.coreMiddlewares',
      app.config.coreMiddlewares
    )
    // output:
    // 内置中间件 - app.config.coreMiddlewares [
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
    ctx.body = 'hi, egg'
  }
}

module.exports = HomeController