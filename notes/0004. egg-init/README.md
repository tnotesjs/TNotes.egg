# [0004. egg-init](https://github.com/Tdahuyou/TNotes.egg/tree/main/notes/0004.%20egg-init)

<!-- region:toc -->
- [1. 🔗 egg-init 的 Github 仓库链接](#1--egg-init-的-github-仓库链接)
- [2. 📒 功能](#2--功能)
- [3. 📒 主要用途](#3--主要用途)
- [4. 📒 安装方式](#4--安装方式)
- [5. 📒 使用示例](#5--使用示例)
- [6. 📒 适用场景](#6--适用场景)
<!-- endregion:toc -->

## 1. 🔗 egg-init 的 Github 仓库链接

- https://github.com/eggjs/egg-init

## 2. 📒 功能

`egg-init` 是一个脚手架工具，用于快速生成 Egg.js 项目的初始结构。它帮助开发者快速搭建项目目录、配置文件和基础代码，从而减少手动创建文件的工作量。

## 3. 📒 主要用途

- 创建新的 Egg.js 项目。
- 提供多种模板（如 `simple` 和 `full`），以满足不同项目的需求。
- 自动初始化项目的基本依赖和目录结构。

## 4. 📒 安装方式

`egg-init` 是一个全局工具，需要通过 npm 全局安装：

```bash
npm install egg-init -g
```

## 5. 📒 使用示例

运行以下命令创建一个新的 Egg.js 项目：

```bash
egg-init my-app --type=simple
```

- `my-app` 是项目名称。
- `--type=simple` 表示使用简单模板。如果需要更复杂的项目结构，可以使用 `--type=full`。

执行后，`egg-init` 会生成一个包含基本文件和目录的项目。

## 6. 📒 适用场景

- 新项目启动时，快速生成项目骨架。
- 需要遵循 Egg.js 的约定和最佳实践。


