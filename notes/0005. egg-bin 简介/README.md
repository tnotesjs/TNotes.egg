# [0005. egg-bin 简介](https://github.com/tnotesjs/TNotes.egg/tree/main/notes/0005.%20egg-bin%20%E7%AE%80%E4%BB%8B)

<!-- region:toc -->

- [1. egg-bin 的 Github 仓库链接](#1-egg-bin-的-github-仓库链接)
- [2. `egg-bin` 概述](#2-egg-bin-概述)

<!-- endregion:toc -->

## 1. egg-bin 的 Github 仓库链接

- https://github.com/eggjs/bin

## 2. `egg-bin` 概述

- `egg-bin` 是一个开发和调试工具，主要用于本地开发、测试和运行 Egg.js 应用程序。
- 它是 Egg.js 官方提供的 CLI 工具，集成在项目中，而不是全局安装。
- **主要用途**
  - 启动开发服务器（支持热更新）。
  - 运行单元测试和覆盖率分析。
- **适用场景**
  - 需要在开发环境中快速验证功能。
- **安装和基本使用**
  - `egg-bin` 通常作为项目的开发依赖安装，而不是全局工具。
  - 在使用 `egg-init` 创建项目时，`egg-bin` 会自动被添加到 `devDependencies` 中。

::: code-group

```bash [安装]
# 如果你需要手动安装，可以运行：
npm install egg-bin --save-dev
```

```json{25,27-28} [package.json]
{
  "name": "helloWorld",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "egg": {
    "declarations": true
  },
  "dependencies": {
    "egg": "^3.17.5",
    "egg-scripts": "2"
  },
  "devDependencies": {
    "egg-bin": "6",
    "egg-mock": "5",
    "eslint": "8",
    "eslint-config-egg": "13"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "start": "egg-scripts start --daemon --title=egg-server-helloWorld",
    "stop": "egg-scripts stop --title=egg-server-helloWorld",
    "dev": "egg-bin dev",
    "test": "npm run lint -- --fix && npm run test:local",
    "test:local": "egg-bin test",
    "cov": "egg-bin cov",
    "lint": "eslint .",
    "ci": "npm run lint && npm run cov"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "author": "",
  "license": "MIT"
}
```

```bash [命令解释]
# 启动 - 启动开发服务器，支持热更新。（最常用的命令之一）
npm run dev

# 测试 - 运行单测
npm run test:local

# 报告 - 运行测试并生成覆盖率报告。
npm run cov
```

::: code-group
