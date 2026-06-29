# [0008. 目录结构](https://github.com/tnotesjs/TNotes.egg/tree/main/notes/0008.%20%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)

<!-- region:toc -->

- [1. 快速了解 Egg.js 基本目录结构](#1-快速了解-eggjs-基本目录结构)

<!-- endregion:toc -->

## 1. 快速了解 Egg.js 基本目录结构

```bash
egg-project
├── package.json # 项目的包管理文件，定义了项目依赖、脚本和其他元信息。
├── app.js（可选） # 用于自定义应用启动时的初始化工作，例如全局事件监听或自定义逻辑。
├── agent.js（可选） # 用于自定义 Agent 进程的初始化工作，Agent 进程通常用于处理一些后台任务。
├── app
│   ├── router.js # 用于配置 URL 路由规则，将请求路径映射到对应的 Controller 的 Action。
│   ├── controller # 用于解析用户的输入，处理后返回相应的结果。
│   │   └── home.js # 每一个 .js 文件就是一个具体的 Controller 类，其中的每个实例方法就是一个 Action。（理清这些术语，对阅读文档会有所帮助。）
│   ├── service（可选） # 用于编写业务逻辑层，建议使用。不要将业务逻辑一起丢到 Controller 中，单独将其抽离出来丢到 Service 目录下边儿。
│   │   └── user.js # 定义与数据库交互的模型，例如用户表的字段和关系。
│   ├── middleware（可选） # 用于编写中间件，中间件可以在请求到达 Controller 之前或之后执行一些通用逻辑。Controller 和中间件没有直接关系。中间件可以通过 Router 配置为局部中间件，或者通过全局配置应用于所有路由。
│   │   └── response_time.js # 响应时间中间件，用于记录请求的响应时间。
│   ├── model（可选） # 用于放置领域模型，如 [egg-sequelize](https://github.com/eggjs/egg-sequelize) 等领域类相关插件。
│   ├── schedule（可选） # 用于定时任务。这是由内置插件 [@egg/schedule](https://github.com/eggjs/schedule) 约定的目录，具体用法可以参考该插件的说明文档。
│   │   └── my_task.js # 自定义的定时任务，比如定义一个定时任务，每天凌晨清理过期数据。
│   ├── public（可选） # 用于放置静态资源。这是由内置插件 [@egg/static](https://github.com/eggjs/static) 约定的目录，具体用法可以参考该插件的说明文档。
│   │   └── reset.css # 具体的静态资源文件，例如 CSS 重置样式表。
│   ├── view（可选） # 用于放置模板文件，支持多种模板引擎（如 Nunjucks、EJS 等）。
│   │   └── home.tpl # 模板文件，用于渲染 HTML 页面。
│   └── extend（可选） # 用于框架的扩展，允许开发者对 Egg.js 的核心对象进行扩展。
│       ├── helper.js（可选） # 扩展 Helper 对象，提供全局可用的工具函数。
│       ├── request.js（可选） # 扩展 Request 对象，增强请求对象的功能。
│       ├── response.js（可选） # 扩展 Response 对象，增强响应对象的功能。
│       ├── context.js（可选） # 扩展 Context 对象，增强上下文对象的功能。
│       ├── application.js（可选） # 扩展 Application 对象，增强应用实例的功能。
│       └── agent.js（可选） # 扩展 Agent 对象，增强 Agent 进程的功能。
├── config # 用于编写配置文件，定义项目的运行时配置。
│   ├── plugin.js # 用于配置需要加载的插件，启用或禁用插件。
│   ├── config.default.js # 默认配置文件，适用于所有环境。
│   ├── config.prod.js # 生产环境的配置文件，覆盖默认配置。
│   ├── config.test.js（可选） # 测试环境的配置文件，覆盖默认配置。
│   ├── config.local.js（可选） # 本地开发环境的配置文件，覆盖默认配置。
│   └── config.unittest.js（可选） # 单元测试环境的配置文件，覆盖默认配置。
└── test # 用于单元测试，确保代码质量和功能正确性。
    ├── middleware # 定义 middleware 的单测。
    │   └── response_time.test.js # 测试 response_time 中间件的功能。
    └── controller # 定义 controller 的单测。
        └── home.test.js # 测试 home 控制器的功能。
```

> **若需自定义自己的目录规范，参见 [Loader API](https://eggjs.org/zh-cn/advanced/loader.html)**
