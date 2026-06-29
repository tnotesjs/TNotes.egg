# [0020. ctx.service 和 app.service](https://github.com/tnotesjs/TNotes.egg/tree/main/notes/0020.%20ctx.service%20%E5%92%8C%20app.service)

<!-- region:toc -->

- [1. 概述](#1-概述)

<!-- endregion:toc -->

## 1. 概述

- `ctx.service` 和 `app.service` 在 Egg.js 中是不一样的，虽然它们都指向项目中的 Service 类，但使用方式和含义不同。
- `ctx.service`
  - 请求上下文中的 service 实例，绑定当前请求的上下文（如 ctx, app, request, response 等）
- `app.service`
  - 应用级别的 service 构造函数或命名空间，不绑定任何请求上下文

| 使用场景                        | 推荐写法             |
| ------------------------------- | -------------------- |
| 在 Controller 中调用服务层      | ✅ `ctx.service.xxx` |
| 在 Service 内部调用其他 Service | ✅ `ctx.service.xxx` |
