# ctx.locals 我认为确实有点儿用，不过 app.locals 好像没什么必要，如果要定义一些全局共享的变量、或者常量等信息，我完全可以自定义一个 app/common/constants.js 模块，将所有的常量都封装在这里面，通过 exports.xxx 导出，这样对于那些无法直接获取到 app 或者 ctx 的模块反而还更有好一些，你觉得呢？

你的观点非常合理！在 Egg.js 中，`app.locals` 确实可以通过模块化的方式替代，而自定义模块（如 `app/common/constants.js`）在某些场景下确实更灵活、更符合工程化规范。以下是对两者的对比分析，以及各自的适用场景：

---

### **1. 为什么自定义模块可能更优？**

#### **优点：**

- **解耦性更强**：通过模块导出的方式，不依赖框架的上下文对象（如 `app`），可以在任何地方（如工具函数、配置文件、第三方库）直接导入使用。
- **类型友好**：在 TypeScript 或使用 JSDoc 的项目中，模块导出的常量或配置可以更容易获得类型提示和代码补全。
- **避免污染全局**：模块化的方式更符合“最小权限原则”，避免全局变量可能带来的命名冲突或意外修改。

#### **示例：**

```javascript
// app/common/constants.js
exports.SITE_NAME = 'My Awesome Site'
exports.MAX_UPLOAD_SIZE = '10MB'
exports.DEBUG_MODE = true

// 在控制器中使用
const { SITE_NAME } = require('../common/constants')
class HomeController extends Controller {
  async index() {
    this.ctx.body = `Welcome to ${SITE_NAME}`
  }
}

// 在配置文件中使用
// config/config.default.js
const { DEBUG_MODE } = require('../app/common/constants')
exports.logger = {
  level: DEBUG_MODE ? 'DEBUG' : 'INFO',
}
```

---

### **2. `app.locals` 的不可替代场景**

尽管自定义模块可以替代大部分 `app.locals` 的功能，但以下场景中 `app.locals` 仍然更具优势：

#### **场景 1：动态全局数据**

如果全局数据需要**在运行时动态更新**（例如从数据库加载的配置），`app.locals` 是更直接的选择。模块导出的变量通常是静态的，无法在运行时动态修改。

```javascript
// 在 app.js 中动态加载配置
module.exports = async (app) => {
  const config = await fetchDynamicConfigFromDB() // 假设异步获取配置
  app.locals.dynamicConfig = config
}

// 在中间件中使用动态配置
app.use(async (ctx, next) => {
  if (ctx.app.locals.dynamicConfig.featureFlag) {
    // 启用新功能
  }
  await next()
})
```

#### **场景 2：框架集成**

某些框架插件或中间件可能直接依赖 `app.locals` 来共享数据。例如，某些模板引擎（如 Nunjucks）会自动将 `app.locals` 的数据注入模板上下文。

#### **场景 3：中间件间共享数据**

如果多个中间件需要共享数据，且这些数据需要在应用启动时初始化（例如预加载的缓存），`app.locals` 可以更方便地实现。

---

### **3. 如何选择？**

根据具体场景灵活选择：

- **静态常量或配置**：优先使用自定义模块（如 `constants.js`），通过 `require` 或 `import` 导入。
- **动态全局数据**：使用 `app.locals`，尤其是需要在运行时更新的配置。
- **模板渲染上下文**：如果模板引擎直接依赖 `app.locals`，可以保留它以简化代码。

---

### **4. 最佳实践建议**

#### **混合使用**

可以结合两者的优势：

- **静态配置**：通过模块导出（如 `constants.js`）。
- **动态数据**：通过 `app.locals` 存储。
- **模板上下文**：在渲染时合并 `app.locals` 和 `ctx.locals`。

#### **示例：**

```javascript
// app.js
const { SITE_NAME } = require('./app/common/constants')
module.exports = async (app) => {
  app.locals.siteName = SITE_NAME // 将静态常量挂载到 app.locals
  app.locals.dynamicConfig = await fetchDynamicConfigFromDB()
}

// 控制器中使用
class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const staticConfig = require('../common/constants')
    const dynamicConfig = ctx.app.locals.dynamicConfig
    ctx.body = {
      staticSiteName: staticConfig.SITE_NAME,
      dynamicFeatureFlag: dynamicConfig.featureFlag,
    }
  }
}
```

---

### **总结**

- **自定义模块**更适合静态配置和常量，解耦性更强。
- **`app.locals`** 在动态数据、框架集成和中间件通信中仍有不可替代的作用。

你的思路是正确的，但建议根据场景灵活选择，而非完全摒弃 `app.locals`。两者并非对立关系，而是互补的工具。
