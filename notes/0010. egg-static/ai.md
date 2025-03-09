


---

### 2. 默认约定

Egg.js 遵循“约定优于配置”的原则，因此 `egg-static` 插件有一些默认行为：

#### (1) 静态资源目录
- 默认的静态资源目录是 `app/public`。
- 客户端可以通过 `/public/xxx` 路径访问该目录下的文件。

#### (2) 插件启用
- `egg-static` 是 Egg.js 的内置插件，默认情况下已经启用，无需手动安装或配置。

#### (3) 文件访问示例
假设你的项目结构如下：
```
app/
└── public/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        └── logo.png
```

- 访问 `http://localhost:7001/public/css/style.css` 将返回 `style.css` 文件。
- 访问 `http://localhost:7001/public/images/logo.png` 将返回 `logo.png` 文件。

---

### 3. 配置方式

虽然 `egg-static` 插件默认已经启用，但你可以通过配置文件对其进行自定义。

#### (1) 基本配置
```javascript
// config/config.default.js
exports.static = {
  prefix: '/static/', // 修改静态资源的 URL 前缀
  dir: path.join(app.baseDir, 'app/assets'), // 修改静态资源目录
};
```

- **`prefix`**：定义静态资源的 URL 前缀，默认是 `/public/`。
- **`dir`**：定义静态资源的存放目录，默认是 `app/public`。

#### (2) 禁用插件
如果你不需要静态资源服务（例如在生产环境中使用 Nginx），可以通过以下方式禁用 `egg-static`：
```javascript
// config/plugin.js
exports.static = false; // 禁用 egg-static 插件
```

#### (3) 高级配置
`egg-static` 还支持更多高级选项，例如：
- **缓存控制**：设置 HTTP 缓存头。
- **文件匹配规则**：限制哪些文件可以被访问。
- **性能优化**：启用 Gzip 压缩等。

示例：
```javascript
exports.static = {
  maxAge: 365 * 24 * 60 * 60 * 1000, // 设置缓存时间为 1 年
  gzip: true, // 启用 Gzip 压缩
};
```

---

### 4. 工作原理

`egg-static` 插件的核心是一个 Koa 中间件，它的工作流程如下：

1. **拦截请求**：  
   当客户端发起请求时，`egg-static` 中间件会检查请求路径是否匹配静态资源目录。

2. **查找文件**：  
   如果匹配成功，中间件会在静态资源目录中查找对应的文件。

3. **返回文件**：  
   如果找到文件，中间件会将文件内容返回给客户端，并设置适当的 HTTP 头（如 `Content-Type` 和缓存头）。

4. **继续处理**：  
   如果未找到文件，中间件会调用 `next()`，将请求交给后续的中间件或 Controller 处理。

---

### 5. 使用场景

#### (1) 开发环境
在开发环境中，`egg-static` 是一个非常方便的工具，可以直接提供静态资源服务，无需额外配置。

#### (2) 小型项目
对于小型项目或原型开发，`egg-static` 可以满足大部分静态资源服务需求。

#### (3) 生产环境
在生产环境中，建议使用更高效的静态资源服务（如 Nginx 或 CDN）。如果仍然使用 `egg-static`，可以通过配置缓存和压缩来优化性能。

---

### 6. 注意事项

#### (1) 安全性
- 静态资源目录中的文件会直接暴露给客户端，因此不要将敏感文件（如配置文件、源码等）放入静态资源目录。
- 可以通过配置文件匹配规则限制可访问的文件类型。

#### (2) 性能
- 在高并发场景下，`egg-static` 的性能可能不如专业的静态资源服务器（如 Nginx）。
- 如果需要更高的性能，建议结合反向代理（如 Nginx）或 CDN 使用。

#### (3) 自定义目录
- 如果你修改了静态资源目录，请确保路径配置正确，否则可能会导致文件无法访问。

---

### 7. 示例代码

以下是一个完整的示例，展示如何使用 `egg-static` 提供静态资源服务：

#### (1) 项目结构
```
app/
└── public/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        └── logo.png
```

#### (2) 配置文件
```javascript
// config/config.default.js
const path = require('path');

exports.static = {
  prefix: '/static/', // 修改 URL 前缀为 /static/
  dir: path.join(app.baseDir, 'app/public'), // 指定静态资源目录
};
```

#### (3) 访问资源
- `http://localhost:7001/static/css/style.css` 返回 `style.css`。
- `http://localhost:7001/static/images/logo.png` 返回 `logo.png`。

---



## 插件的配置

`config/plugin.js`只是控制插件的启用和关闭，对于插件的配置需要在`config/config.default.js`中完成。

这样做的逻辑理念是：集中配置，集中管理

不同的插件有不同的配置，需要阅读插件的官方文档

```js
exports.static = {
  // egg-static 的配置
}
```
