# 对于 app.locals、ctx.locals 的其他用途，你能再举一些具体的示例吗？

当然可以！`app.locals` 和 `ctx.locals` 的用途并不仅限于模板渲染，它们在实际开发中还有许多其他应用场景。以下是更具体的示例，帮助你更好地理解它们的灵活性和实用性。

---

### **`app.locals` 的其他用途**

#### 1. **全局配置管理**

`app.locals` 可以用来存储一些全局配置信息，这些信息可以在应用的任何地方访问。例如：

```javascript
// 在 app.js 中设置全局配置
module.exports = (app) => {
  app.locals.config = {
    siteName: 'My Awesome Site',
    version: '1.0.0',
    debugMode: true,
  }
}

// 在中间件或控制器中使用
app.use(async (ctx, next) => {
  if (ctx.app.locals.config.debugMode) {
    console.log('Debug mode is enabled')
  }
  await next()
})
```

#### 2. **动态加载的全局数据**

某些全局数据可能需要在应用启动时从数据库或其他外部服务加载，并在整个生命周期内共享。例如：

```javascript
// 在 app.js 中加载全局菜单数据
module.exports = async (app) => {
  const menuData = await fetchMenuFromDatabase(); // 假设这是一个异步函数
  app.locals.menu = menuData;
};

// 在模板中直接使用
<h2>Menu</h2>
<ul>
  <% for (const item of menu) { %>
    <li><%= item.name %></li>
  <% } %>
</ul>

// 或者在控制器中使用
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const menu = ctx.app.locals.menu; // 访问全局菜单数据
    ctx.body = { menu };
  }
}
```

#### 3. **全局事件监听器**

你可以将全局事件监听器挂载到 `app.locals`，以便在不同模块中复用。例如：

```javascript
// 在 app.js 中定义全局事件监听器
module.exports = (app) => {
  const eventEmitter = new EventEmitter()
  app.locals.eventEmitter = eventEmitter

  eventEmitter.on('userLogin', (user) => {
    console.log(`User ${user.name} logged in`)
  })
}

// 在某个控制器中触发事件
class UserController extends Controller {
  async login() {
    const { ctx } = this
    const user = { name: 'John Doe' }
    ctx.app.locals.eventEmitter.emit('userLogin', user)
    ctx.body = { success: true }
  }
}
```

---

### **`ctx.locals` 的其他用途**

#### 1. **跨中间件传递数据**

`ctx.locals` 是一个非常方便的工具，用于在中间件之间传递请求相关的上下文数据。例如：

```javascript
// 中间件 A：记录请求开始时间
app.use(async (ctx, next) => {
  ctx.locals.startTime = Date.now()
  await next()
})

// 中间件 B：计算请求耗时
app.use(async (ctx, next) => {
  await next()
  const endTime = Date.now()
  const duration = endTime - ctx.locals.startTime
  console.log(`Request took ${duration}ms`)
})

// 控制器中也可以访问
class HomeController extends Controller {
  async index() {
    const { ctx } = this
    console.log(`Start time: ${ctx.locals.startTime}`)
    ctx.body = { message: 'Hello World' }
  }
}
```

#### 2. **动态权限控制**

你可以在中间件中根据用户的角色或权限设置 `ctx.locals`，然后在后续逻辑中使用这些信息进行权限校验。例如：

```javascript
// 权限检查中间件
app.use(async (ctx, next) => {
  const user = await getUserFromSession(ctx) // 假设从会话中获取用户信息
  ctx.locals.userRole = user.role || 'guest'
  await next()
})

// 控制器中根据角色限制访问
class AdminController extends Controller {
  async dashboard() {
    const { ctx } = this
    if (ctx.locals.userRole !== 'admin') {
      ctx.status = 403
      ctx.body = { error: 'Access denied' }
      return
    }
    ctx.body = { message: 'Welcome to the admin dashboard' }
  }
}
```

#### 3. **日志上下文增强**

在复杂的系统中，日志记录通常需要包含请求的上下文信息（如用户 ID、请求 ID 等）。你可以利用 `ctx.locals` 来存储这些信息，便于统一记录日志。例如：

```javascript
// 日志中间件
app.use(async (ctx, next) => {
  const requestId = generateRequestId() // 假设生成唯一的请求 ID
  ctx.locals.requestId = requestId

  console.log(`[${requestId}] Request started`)
  await next()
  console.log(`[${requestId}] Request completed`)
})

// 在控制器中添加更多日志
class UserController extends Controller {
  async profile() {
    const { ctx } = this
    console.log(`[${ctx.locals.requestId}] Fetching user profile`)
    ctx.body = { profile: 'User data' }
  }
}
```

#### 4. **API 数据预处理**

在 API 开发中，你可能需要对请求数据进行预处理，并将结果存储在 `ctx.locals` 中供后续逻辑使用。例如：

```javascript
// 数据预处理中间件
app.use(async (ctx, next) => {
  const rawBody = ctx.request.body
  ctx.locals.processedData = preprocessData(rawBody) // 假设这是一个数据预处理函数
  await next()
})

// 控制器中直接使用预处理后的数据
class DataController extends Controller {
  async save() {
    const { ctx } = this
    const processedData = ctx.locals.processedData
    await saveToDatabase(processedData) // 假设保存到数据库
    ctx.body = { success: true }
  }
}
```

---

### **总结**

通过上述示例可以看出，`app.locals` 和 `ctx.locals` 的作用远不止于模板渲染。它们的核心价值在于：

- **`app.locals`** 提供了一个全局共享的空间，适合存储生命周期内不变的数据。
- **`ctx.locals`** 提供了一个请求级的上下文空间，适合存储与当前请求相关的动态数据。

在实际开发中，合理利用这两个对象可以显著提升代码的可维护性和扩展性。如果你有更具体的需求或场景，欢迎进一步探讨！
