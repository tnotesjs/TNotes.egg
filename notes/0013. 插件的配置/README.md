# [0013. 插件的配置](https://github.com/tnotesjs/TNotes.egg/tree/main/notes/0013.%20%E6%8F%92%E4%BB%B6%E7%9A%84%E9%85%8D%E7%BD%AE)

<!-- region:toc -->

- [1. 插件的配置说明](#1-插件的配置说明)

<!-- endregion:toc -->

## 1. 插件的配置说明

- `xxx` 插件的配置包括俩部分：
  - 1️⃣ 是否启用 `xxx` 插件
    - `config/plugin.js` 只是决定用什么插件、以及控制插件的启用和关闭。
  - 2️⃣ `xxx` 插件的相关参数
    - 插件的配置需要在 `config/config.default.js` 中完成。
  - 这样做的逻辑理念是：
    - `config/plugin.js` 集中管理
    - `config/config.default.js` 集中配置
- **不同的插件有不同的参数配置，需要阅读具体插件的官方文档。**
- **示例 - mysql 插件配置**

```js
// config/config.default.js
exports.mysql = {
  client: {
    host: 'mysql.com',
    port: '3306',
    user: 'test_user',
    password: 'test_password',
    database: 'test',
  },
}
```
