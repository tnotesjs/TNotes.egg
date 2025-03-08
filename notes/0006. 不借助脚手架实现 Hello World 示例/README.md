# [0006. 不借助脚手架实现 Hello World 示例](https://github.com/Tdahuyou/TNotes.egg/tree/main/notes/0006.%20%E4%B8%8D%E5%80%9F%E5%8A%A9%E8%84%9A%E6%89%8B%E6%9E%B6%E5%AE%9E%E7%8E%B0%20Hello%20World%20%E7%A4%BA%E4%BE%8B)

<!-- region:toc -->
- [1. 📒 概述](#1--概述)
- [2. 💻 demos.1 - Hello World 示例](#2--demos1---hello-world-示例)
<!-- endregion:toc -->

## 1. 📒 概述

- 搭建 egg 工程的两种方式：
  - 1️⃣ 使用 egg 脚手架 `egg-init`。
    - 在其他笔记 `TNotes.egg.0003` 中介绍过。
  - 2️⃣ 手动从 0 到 1 搭建。
- 本节介绍的是如何不借助 `egg-init` 脚手架来实现一个 Hello World 的 demo。
- 按照下面记录的流程，安装好必要的包，创建好相应的目录结构，简单写几行代码就完事儿了。

## 2. 💻 demos.1 - Hello World 示例

::: code-group

```bash [安装必要的包]
npm init -y # 初始化一个包
npm i egg # 安装 egg 核心库
npm i -D egg-bin # 安装官方提供的 egg CLI 工具，用于开发环境。
```

```json{13,16} [package.json]
{
  "name": "1",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "egg": "^3.30.1"
  },
  "devDependencies": {
    "egg-bin": "^6.13.0"
  }
}
```

```bash{2-7} [准备目录结构]
root
├── app  # 应用程序目录，几乎所有核心代码都在此目录
│   ├── controller  # 控制器目录，每个控制器用于处理请求
│   │   └── home.js  # 某个控制器
│   └── router.js # 路由设置，将请求路径、方法映射到控制器
├── config # 配置目录
│   └── config.default.js # 默认配置
└── package.json
```

```js [app/controller/home.js]
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world';
  }
}

module.exports = HomeController;
```

```js [app/router.js]
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
```

```js [config/config.default.js]
exports.keys = 'TNotes.egg.0006';
// 这里的 keys 是你自己的 Cookie 安全字符串。
```

:::