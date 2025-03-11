# 在 Egg.js 中，app.locals 和 ctx.locals 是不是只有在 View 模板渲染的场景下才有用？


### 3. ****

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