# 在 Egg.js 中，app.locals 和 ctx.locals 是不是只有在 View 模板渲染的场景下才有用？

---

在 Egg.js 中，`app.locals` 和 `ctx.locals` 的确主要用于 View 模板渲染的场景，但它们的作用范围和使用方式需要进一步明确。以下是详细的分析：

---

### 1. **`app.locals` 的作用**

`app.locals` 是挂载在应用实例上的全局变量，通常用于存储在整个应用程序生命周期内共享的数据。它的主要特点如下：

- **全局性**：`app.locals` 的数据对所有请求都可见。
- **生命周期**：`app.locals` 的值在应用启动时初始化，并且在整个应用运行期间保持不变（除非手动修改）。
- **典型用途**：
  - 存储全局配置信息，例如站点名称、版本号等。
  - 提供模板渲染时需要的全局变量。

例如：

```javascript
// 在 app.js 中设置全局变量
module.exports = (app) => {
  app.locals.siteName = 'My Awesome Site'
}
```

在模板中可以直接访问：

```html
<h1>Welcome to <%= siteName %></h1>
```

---

### 2. **`ctx.locals` 的作用**

`ctx.locals` 是挂载在每个请求上下文（`ctx`）中的局部变量，主要用于为当前请求提供特定的数据。它的主要特点如下：

- **请求级作用域**：`ctx.locals` 的数据仅对当前请求有效。
- **生命周期**：`ctx.locals` 的值在每次请求开始时初始化，并在请求结束时销毁。
- **典型用途**：
  - 动态传递与当前请求相关的数据到模板中。
  - 在中间件或控制器中设置模板渲染所需的变量。

例如：

```javascript
// 在控制器中设置局部变量
class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.locals.user = { name: 'John Doe' }
    await ctx.render('home.tpl')
  }
}
```

在模板中可以直接访问：

```html
<p>Hello, <%= user.name %>!</p>
```

---

### 3. **是否仅限于模板渲染场景？**

虽然 `app.locals` 和 `ctx.locals` 最常见的用途是为模板渲染提供数据，但它们并不仅限于此。以下是一些扩展的使用场景：

#### **`app.locals` 的其他用途**

- **中间件共享数据**：可以在中间件中读取 `app.locals` 的值，用于处理一些全局逻辑。
- **动态配置管理**：如果某些全局配置需要动态更新，可以通过修改 `app.locals` 来实现。

#### **`ctx.locals` 的其他用途**

- **跨中间件通信**：在一个中间件中设置 `ctx.locals`，然后在后续的中间件或控制器中读取这些值。
- **日志记录**：可以将请求相关的上下文信息存储在 `ctx.locals` 中，便于统一记录日志。

例如：

```javascript
// 中间件 A 设置局部变量
app.use(async (ctx, next) => {
  ctx.locals.startTime = Date.now()
  await next()
})

// 中间件 B 使用局部变量
app.use(async (ctx, next) => {
  const endTime = Date.now()
  console.log(`Request took ${endTime - ctx.locals.startTime}ms`)
  await next()
})
```

---

### 4. **总结**

- **`app.locals`** 主要用于存储全局共享的数据，适合在模板渲染或其他需要全局访问的场景中使用。
- **`ctx.locals`** 主要用于存储与当前请求相关的数据，适合在模板渲染、中间件通信等场景中使用。
- 虽然它们最常用于模板渲染，但并不限于此，也可以在其他场景中灵活使用。

如果你有更具体的使用场景或问题，欢迎补充说明，我可以为你提供更针对性的解答！
