const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }

  // 创建控制器方法
  async hello() {
    this.ctx.body = 'Hello World'
  }
}

module.exports = HomeController
