
### **步骤 1：安装 Egg.js 脚手架工具**

Egg.js 提供了一个官方的脚手架工具 `egg-init`，用于快速生成项目结构。

运行以下命令全局安装 `egg-init`：

```bash
npm install egg-init -g
```

安装完成后，可以通过以下命令验证是否成功：

```bash
egg-init --version
```

---

### **步骤 2：创建项目**

使用 `egg-init` 创建一个新的 Egg.js 项目。假设项目名称为 `hello-egg`：

```bash
egg-init hello-egg --type=simple
```

- `--type=simple` 表示使用简单模板（适合初学者）。
- 如果需要更复杂的项目结构，可以选择 `--type=full`。

执行命令后，脚手架会自动生成项目文件夹和初始代码。

---

### **步骤 3：进入项目目录**

创建完成后，进入项目目录：

```bash
cd hello-egg
```

---

### **步骤 4：安装依赖**

运行以下命令安装项目所需的依赖：

```bash
npm install
```

安装完成后，你会看到 `node_modules` 文件夹和 `package.json` 文件中列出的所有依赖。

---

### **步骤 5：启动开发服务器**

Egg.js 提供了内置的开发服务器，支持热更新功能。运行以下命令启动开发服务器：

```bash
npm run dev
```

启动成功后，终端会显示类似以下内容：

```
[egg:core] App started at http://127.0.0.1:7001
```

此时，你可以打开浏览器访问 `http://127.0.0.1:7001`，默认会看到一个欢迎页面。

---

### **步骤 6：编写 Hello World 接口**

接下来，我们将在项目中添加一个简单的 API 接口，返回 "Hello World"。

#### 1. 定义路由

编辑 `app/router.js` 文件，添加一个路由规则：

```javascript
module.exports = (app) => {
  const { router, controller } = app
  router.get('/hello', controller.home.hello)
}
```

- 这里定义了一个 GET 请求路径 `/hello`，并将其映射到 `controller.home.hello` 方法。

#### 2. 创建控制器方法

编辑 `app/controller/home.js` 文件，在其中添加 `hello` 方法：

```javascript
const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Welcome to Egg.js!'
  }

  async hello() {
    this.ctx.body = 'Hello World'
  }
}

module.exports = HomeController
```

- `index` 方法是默认生成的，用于处理根路径 `/` 的请求。
- 新增的 `hello` 方法用于处理 `/hello` 路径的请求，返回 "Hello World"。

---

### **步骤 7：测试接口**

保存所有文件后，开发服务器会自动重启。现在可以测试我们刚刚创建的接口。

打开浏览器或使用 Postman 等工具访问以下 URL：

```
http://127.0.0.1:7001/hello
```

你应该会看到以下响应：

```
Hello World
```

同时，访问根路径 `/`：

```
http://127.0.0.1:7001
```

会返回默认的欢迎信息：

```
Welcome to Egg.js!
```

---

### **步骤 8：项目结构回顾**

完成上述步骤后，项目的目录结构如下：

```
├── app
│   ├── controller
│   │   └── home.js       // 控制器，包含 index 和 hello 方法
│   ├── router.js         // 路由配置
├── config
│   ├── config.default.js // 默认配置
│   └── plugin.js         // 插件配置
├── logs                  // 日志文件
├── test                  // 测试代码
├── package.json          // 项目依赖
└── README.md             // 项目说明文档
```

---

### **步骤 9：部署到生产环境（可选）**

如果你希望将项目部署到生产环境，可以按照以下步骤操作：

1. **构建项目**
   运行以下命令构建生产环境代码：

   ```bash
   npm run build
   ```

2. **启动应用**
   使用 `egg-scripts` 启动生产环境服务：

   ```bash
   npm start
   ```

3. **停止应用**
   如果需要停止服务，可以运行：
   ```bash
   npm stop
   ```

---

### **总结**

通过以上步骤，我们从零开始搭建了一个基于 Egg.js 的 "Hello World" 示例。这个过程涵盖了项目初始化、路由定义、控制器开发以及接口测试等核心环节。Egg.js 的约定优于配置设计使得开发者能够快速上手，同时其插件机制和扩展能力也为复杂项目提供了强大的支持。

如果你对 Egg.js 的更多功能感兴趣，可以进一步探索其插件系统、中间件机制以及多进程模型等内容。
