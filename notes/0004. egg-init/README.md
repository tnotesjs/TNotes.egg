# [0004. egg-init](https://github.com/Tdahuyou/TNotes.egg/tree/main/notes/0004.%20egg-init)

<!-- region:toc -->
- [1. 🔗 `egg-init` 的 Github 仓库链接](#1--egg-init-的-github-仓库链接)
- [2. 📒 `egg-init` 概述](#2--egg-init-概述)
- [3. 💻 `egg-init --help`](#3--egg-init---help)
- [4. 📒 boilerplate （样板项目）](#4--boilerplate-样板项目)
<!-- endregion:toc -->

## 1. 🔗 `egg-init` 的 Github 仓库链接

- https://github.com/eggjs/egg-init

## 2. 📒 `egg-init` 概述

- `egg-init` 是一个脚手架工具，用于快速生成 Egg.js 项目的初始结构。
- 它帮助开发者快速搭建项目目录、配置文件和基础代码，从而减少手动创建文件的工作量。
- **主要用途**
  - 创建新的 Egg.js 项目，新项目启动时，快速生成项目骨架。
  - 提供多种模板（如 `simple` 和 `full`），以满足不同项目的需求。
  - 自动初始化项目的基本依赖和目录结构，以便更好地遵循 Egg.js 的默认约定和最佳实践。
- **安装及实用示例**

```bash
# 需要通过 npm 全局安装：
npm install egg-init -g

# 运行以下命令创建一个新的 Egg.js 项目：
egg-init my-app --type=simple
# my-app 是项目名称。
# --type=simple 表示使用简单模板。
# 执行后，egg-init 会生成一个包含基本文件和目录的项目。
```

## 3. 💻 `egg-init --help`

```bash
$ egg-init --help
# init egg project from boilerplate.
# Usage: egg-init [dir] --type=simple

# 选项：
#   --type          boilerplate type                                      [字符串]
#   --dir           target directory                                      [字符串]
#   --force, -f     force to override directory                             [布尔]
#   --template      local path to boilerplate                             [字符串]
#   --package       boilerplate package name                              [字符串]
#   --registry, -r  npm registry, support china/npm/custom, default to auto detect
#                                                                         [字符串]
#   --silent        don't ask, just use default value                       [布尔]
#   --version       显示版本号                                              [布尔]
#   -h, --help      显示帮助信息                                            [布尔]
```

## 4. 📒 boilerplate （样板项目）

`egg-init` 的模板类型依赖于具体的 `boilerplate` 配置，而不是硬编码在命令行工具中。

::: code-group

```bash [npm search egg-boilerplate]
# 在 npm 上搜索以 egg-boilerplate- 开头的包
$ npm search egg-boilerplate
```

```bash [查看输出]
detect-port
Node.js implementation of port detector
Version 2.1.0 published 2024-12-10 by fengmk2
Maintainers: fengmk2 xudafeng ziczhu
Keywords: detect port
https://npm.im/detect-port

egg-boilerplate-simple
boilerplate for egg quickstart
Version 3.7.0 published 2024-01-07 by fengmk2
Maintainers: akitasummer gxkl gemwuu eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl dead-horse popomore
https://npm.im/egg-boilerplate-simple

egg-boilerplate-ts
boilerplate for tegg
Version 2.0.1 published 2025-02-21 by fengmk2
Maintainers: atian25 wanghx fengmk2 popomore
https://npm.im/egg-boilerplate-ts

egg-logger
egg logger
Version 3.6.1 published 2024-12-22 by fengmk2
Maintainers: gxkl eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl gemwuu akitasummer popomore
https://npm.im/egg-logger

egg-boilerplate-plugin
boilerplate for egg plugin
Version 3.0.0 published 2025-02-04 by fengmk2
Maintainers: gxkl eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl gemwuu akitasummer
https://npm.im/egg-boilerplate-plugin

egg-view
Base view plugin for egg
Version 2.1.4 published 2023-02-03 by fengmk2
Maintainers: dead-horse atian25 fengmk2 popomore
Keywords: egg eggPlugin egg-plugin egg-view view
https://npm.im/egg-view

egg-utils
Utils for all egg projects
Version 2.5.0 published 2023-04-26 by fengmk2
Maintainers: akitasummer gxkl gemwuu eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl popomore
Keywords: egg utils
https://npm.im/egg-utils

egg-boilerplate-base
base class for egg boilerplate
Version 0.0.0 published 2018-07-12 by atian25
Maintainers: atian25
https://npm.im/egg-boilerplate-base

egg-session
session plugin for egg
Version 3.3.0 published 2021-03-23 by popomore
Maintainers: atian25 dead_horse fengmk2 popomore eggjs-admin
Keywords: egg egg-plugin eggPlugin session cookie
https://npm.im/egg-session

egg-errors
egg-errors provide two kinds of errors that is Error and Exception.
Version 2.3.2 published 2022-12-18 by fengmk2
Maintainers: akitasummer gxkl gemwuu eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl popomore mansonchor
https://npm.im/egg-errors

egg
A web framework's framework for Node.js
Version 3.30.1 published 2025-01-19 by fengmk2
Maintainers: gxkl eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl gemwuu akitasummer shaoshuai0102 popomore
Keywords: web app http application framework middleware koa egg
https://npm.im/egg

egg-development
development tool for egg
Version 3.0.2 published 2024-12-22 by fengmk2
Maintainers: jtyjty99999 atian25 dead_horse fengmk2 popomore eggjs-admin
Keywords: egg plugin egg-plugin eggPlugin
https://npm.im/egg-development

egg-core
A core Pluggable framework based on koa
Version 5.5.1 published 2025-01-22 by fengmk2
Maintainers: gxkl eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl gemwuu akitasummer gxcsoccer popomore
Keywords: egg loader
https://npm.im/egg-core

egg-bin
egg developer tool
Version 6.13.0 published 2024-12-11 by fengmk2
Maintainers: gxkl eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl gemwuu akitasummer popomore
https://npm.im/egg-bin

egg-path-matching
match or ignore url path
Version 2.1.0 published 2024-09-18 by fengmk2
Maintainers: dead_horse fengmk2
Keywords: url match ignore
https://npm.im/egg-path-matching

egg-schedule
schedule plugin for egg, support corn job.
Version 4.0.1 published 2024-03-06 by fengmk2
Maintainers: akitasummer gxkl gemwuu eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl popomore
Keywords: egg egg-plugin eggPlugin schedule cron
https://npm.im/egg-schedule

egg-onerror
error handler for egg
Version 2.4.0 published 2024-10-13 by fengmk2
Maintainers: atian25 dead_horse wanghx fengmk2 popomore eggjs-admin
Keywords: egg egg-plugin onerror
https://npm.im/egg-onerror

egg-ts-helper
egg typescript helper
Version 3.1.1 published 2025-03-05 by fengmk2
Maintainers: wanghx fengmk2
Keywords: egg typescript
https://npm.im/egg-ts-helper

egg-cookies
cookies module for egg
Version 2.10.1 published 2024-07-06 by fengmk2
Maintainers: atian25 dead_horse wanghx fengmk2 popomore
https://npm.im/egg-cookies

egg-static
static server plugin for egg
Version 2.3.1 published 2023-02-13 by fengmk2
Maintainers: akitasummer gxkl gemwuu eggjs-admin fengmk2 atian25 dead_horse wanghx hyj1991 killagu coolme200 mansonchor.zzw hubcarl popomore
Keywords: egg egg-plugin eggPlugin static
https://npm.im/egg-static
```

:::

- 根据你的需求，可以选择以下模板类型：

| 模板名称 | 适用场景                   | 特点                              |
| -------- | -------------------------- | --------------------------------- |
| `simple` | 快速启动小型项目或学习用途 | 简单、轻量，包含最基本的目录结构  |
| `ts`     | 使用 TypeScript 开发的项目 | 支持 TypeScript，适合现代开发流程 |
| `plugin` | 开发 Egg.js 插件           | 包含插件开发所需的目录和配置      |
| ……       | ……                         | ……                                |
