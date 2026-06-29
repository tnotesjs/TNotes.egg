# [0009. 在 Controller 中获取上下文对象的两种方式](https://github.com/tnotesjs/TNotes.egg/tree/main/notes/0009.%20%E5%9C%A8%20Controller%20%E4%B8%AD%E8%8E%B7%E5%8F%96%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F)

<!-- region:toc -->

- [1. demos.1 - 在 Controller 中获取上下文对象的两种方式](#1-demos1---在-controller-中获取上下文对象的两种方式)

<!-- endregion:toc -->

## 1. demos.1 - 在 Controller 中获取上下文对象的两种方式

1. 通过 `this.ctx` 获取上下文对象
2. 通过注入的参数 `ctx` 获取上下文对象

::: code-group

```js{5} [app/controller/home.js]
const { Controller } = require('egg')

class HomeController extends Controller {
  async index(ctx) {
    console.log(ctx === this.ctx) // => true
    this.ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
```

```js{5} [常见写法]
const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    this.ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
```

:::

- **推荐 `this.ctx`**
  - 上述两种方式获取到的上下文对象是一样的，从官方文档中提供的示例来看，通过 `this.ctx` 获取上下文对象是更加常见的写法。
  - 在每个 Action 的第一行就是 `const { ctx } = this`，将上下文对象从 `this` 中解构出来。
