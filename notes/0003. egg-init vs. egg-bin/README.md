# [0003. egg-init vs. egg-bin](https://github.com/Tdahuyou/TNotes.egg/tree/main/notes/0003.%20egg-init%20vs.%20egg-bin)

<!-- region:toc -->
- [1. 🔗 egg-init、egg-bin 的 Github 仓库链接](#1--egg-initegg-bin-的-github-仓库链接)
- [2. 核心区别](#2-核心区别)
- [3. egg-init](#3-egg-init)
  - [3.1. 功能](#31-功能)
  - [3.2. 主要用途](#32-主要用途)
  - [3.3. 安装方式](#33-安装方式)
  - [3.4. 使用示例](#34-使用示例)
  - [3.5. 适用场景](#35-适用场景)
- [4. egg-bin](#4-egg-bin)
  - [4.1. 功能](#41-功能)
  - [4.2. 主要用途](#42-主要用途)
  - [4.3. 安装方式](#43-安装方式)
  - [4.4. 使用示例](#44-使用示例)
  - [4.5. 适用场景](#45-适用场景)
<!-- endregion:toc -->

## 1. 🔗 egg-init、egg-bin 的 Github 仓库链接

- https://github.com/eggjs/egg-init
- https://github.com/eggjs/bin

## 2. 核心区别

| 特性             | `egg-init`                                           | `egg-bin`                                             |
| ---------------- | ---------------------------------------------------- | ----------------------------------------------------- |
| **功能定位**     | 项目初始化工具                                       | 开发、调试和测试工具                                  |
| **安装方式**     | 通常会全局安装 (`npm install egg-init -g`)           | 通常会项目本地安装 (`npm install egg-bin --save-dev`) |
| **使用场景**     | 创建新项目                                           | 开发、调试、测试现有项目                              |
| **是否依赖项目** | 不依赖具体项目                                       | 必须在 Egg.js 项目中使用                              |
| **主要命令**     | `egg-init <project-name>` 根据提示完成项目初始化工作 | `egg-bin dev`, `egg-bin test`, `egg-bin debug` 等     |
| **生命周期阶段** | 项目启动阶段                                         | 项目开发和测试阶段                                    |

- `egg-init` 👉 **项目的初始化阶段**
  - 如果你需要从零开始创建一个 Egg.js 项目，请使用 `egg-init`。
  - 使用 `egg-init` 初始化项目后，项目中会自动包含 `egg-bin` 的配置，它们是相辅相成的，都是 egg 工作流的重要工具。
- `egg-bin` 👉 **项目的开发阶段**
  - 如果你已经有一个 Egg.js 项目，并希望进行开发、调试或测试，请使用 `egg-bin`。
  - 在开发过程中，使用 `egg-bin` 提供的命令进行开发、调试和测试。

## 3. egg-init

### 3.1. 功能

`egg-init` 是一个脚手架工具，用于快速生成 Egg.js 项目的初始结构。它帮助开发者快速搭建项目目录、配置文件和基础代码，从而减少手动创建文件的工作量。

### 3.2. 主要用途

- 创建新的 Egg.js 项目。
- 提供多种模板（如 `simple` 和 `full`），以满足不同项目的需求。
- 自动初始化项目的基本依赖和目录结构。

### 3.3. 安装方式

`egg-init` 是一个全局工具，需要通过 npm 全局安装：

```bash
npm install egg-init -g
```

### 3.4. 使用示例

运行以下命令创建一个新的 Egg.js 项目：

```bash
egg-init my-app --type=simple
```

- `my-app` 是项目名称。
- `--type=simple` 表示使用简单模板。如果需要更复杂的项目结构，可以使用 `--type=full`。

执行后，`egg-init` 会生成一个包含基本文件和目录的项目。

### 3.5. 适用场景

- 新项目启动时，快速生成项目骨架。
- 需要遵循 Egg.js 的约定和最佳实践。

---

## 4. egg-bin

### 4.1. 功能

`egg-bin` 是一个开发和调试工具，主要用于本地开发、测试和运行 Egg.js 应用程序。它是 Egg.js 官方提供的 CLI 工具，集成在项目中，而不是全局安装。

### 4.2. 主要用途

- 启动开发服务器（支持热更新）。
- 运行单元测试和覆盖率分析。
- 调试应用（支持断点调试）。
- 执行自定义脚本。

### 4.3. 安装方式

`egg-bin` 通常作为项目的开发依赖安装，而不是全局工具。在使用 `egg-init` 创建项目时，`egg-bin` 会自动被添加到 `devDependencies` 中。

如果你需要手动安装，可以运行：

```bash
npm install egg-bin --save-dev
```

### 4.4. 使用示例

在 `package.json` 中，`egg-bin` 通常会被配置为 npm 脚本。例如：

```json
{
  "scripts": {
    "dev": "egg-bin dev",
    "debug": "egg-bin debug",
    "test": "egg-bin test",
    "cov": "egg-bin cov"
  }
}
```

```bash
# 启动 - 启动开发服务器。（支持热更新）
npm run dev

# 调试 - 启动调试模式，支持断点调试。
npm run debug

# 测试 - 运行单测
npm run test

# 报告 - 运行测试并生成覆盖率报告。
npm run cov
```

### 4.5. 适用场景

- 本地开发和调试。
- 编写和运行单元测试。
- 分析代码覆盖率。
- 需要在开发环境中快速验证功能。
