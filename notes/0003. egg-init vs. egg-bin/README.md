# [0003. egg-init vs. egg-bin](https://github.com/tnotesjs/TNotes.egg/tree/main/notes/0003.%20egg-init%20vs.%20egg-bin)

<!-- region:toc -->

- [1. egg-init、egg-bin 的 Github 仓库链接](#1-egg-initegg-bin-的-github-仓库链接)
- [2. 对比 `egg-init` 和 `egg-bin`](#2-对比-egg-init-和-egg-bin)

<!-- endregion:toc -->

## 1. egg-init、egg-bin 的 Github 仓库链接

- https://github.com/eggjs/egg-init
- https://github.com/eggjs/bin

## 2. 对比 `egg-init` 和 `egg-bin`

| 特性 | `egg-init` | `egg-bin` |
| --- | --- | --- |
| **功能定位** | 项目初始化工具 | 开发、调试和测试工具 |
| **安装方式** | 通常会全局安装 (`npm install egg-init -g`) | 通常会项目本地安装 (`npm install egg-bin --save-dev`) |
| **使用场景** | 创建新项目 | 开发、调试、测试现有项目 |
| **是否依赖项目** | 不依赖具体项目 | 必须在 Egg.js 项目中使用 |
| **主要命令** | `egg-init <project-name>` 根据提示完成项目初始化工作 | `egg-bin dev`, `egg-bin test`, `egg-bin debug` 等 |
| **生命周期阶段** | 项目启动阶段 | 项目开发和测试阶段 |

- `egg-init` 👉 **项目的初始化阶段**
  - 如果你需要从零开始创建一个 Egg.js 项目，请使用 `egg-init`。
  - 使用 `egg-init` 初始化项目后，项目中会自动包含 `egg-bin` 的配置，它们是相辅相成的，都是 egg 工作流的重要工具。
- `egg-bin` 👉 **项目的开发阶段**
  - 如果你已经有一个 Egg.js 项目，并希望进行开发、调试或测试，请使用 `egg-bin`。
  - 在开发过程中，使用 `egg-bin` 提供的命令进行开发、调试和测试。
