const { Controller } = require('egg')

class HomeController extends Controller {
  async index(ctx) {
    console.log(ctx === this.ctx) // => true
    this.ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
