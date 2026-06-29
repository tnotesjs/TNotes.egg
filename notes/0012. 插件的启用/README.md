# [0012. 插件的启用](https://github.com/tnotesjs/TNotes.egg/tree/main/notes/0012.%20%E6%8F%92%E4%BB%B6%E7%9A%84%E5%90%AF%E7%94%A8)

<!-- region:toc -->

- [1. 插件的启用说明](#1-插件的启用说明)

<!-- endregion:toc -->

## 1. 插件的启用说明

- 一个插件是否启用，需要分不同的情况来看：
  - 如果是内置插件， 大部分都是默认启用的，比如静态资源服务插件 `egg-static`。
  - 如果是手动安装的第三方插件，默认是没有启用的，需要在 `config/plugin.js` 中进行配置，启用插件，比如模板引擎插件 `egg-view-nunjucks`、`egg-view-ejs`。
- **`config/plugin.js` 配置的基本格式**

::: code-group

```js [写法 1 - package]
module.exports = {
  <插件名称>: {
    enable: <是否启用>,
    package: <插件在node_modules中的包名>,
  }
}
```

```js [写法 2 - path]
module.exports = {
  <插件名称>: {
    enable: <是否启用>,
    path: <插件的绝对路径>,
  }
}
```

:::

- `package` 是 `npm` 方式引入，也是最常见的引入方式。
- `path` 是绝对路径引入，例如应用内部提取了一个插件，但尚未发布至 npm；或者是应用自行改写了框架的某些插件。

::: warning ⚠️ 插件配置

- 不要把插件配置写这里边儿，这里仅仅是通过配置：
  - `package`、`path` 决定要用什么插件
  - `enable` 决定是否启用插件
- 对于插件的配置需要在 `config/config.default.js` 中完成。:::

- **示例 - 配置 `egg-static` 的启用和禁用**

::: code-group

```js [写法 1]
module.exports = {
  static: {
    enable: true,
    package: 'egg-static',
  },
}
```

```js [写法 2]
exports.static = {
  enable: true,
  package: 'egg-static',
}
```

```js [写法 3]
// 对于内置插件，可采用以下简洁方式开启或关闭。
exports.static = true
```

:::

- 对于 `egg-static` 插件，可以通过上述的配置启用、禁用它。
  - 禁用的话，将 `enable` 设置为 `false` 即可。
- 写法 3 是针对内置插件的语法糖。
