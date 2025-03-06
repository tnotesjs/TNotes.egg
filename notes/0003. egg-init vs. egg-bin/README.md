# [0003. egg-init vs. egg-bin](https://github.com/Tdahuyou/TNotes.egg/tree/main/notes/0003.%20egg-init%20vs.%20egg-bin)

<!-- region:toc -->
- [1. 核心区别](#1-核心区别)
<!-- endregion:toc -->

## 1. 核心区别

| 特性             | `egg-init`                                           | `egg-bin`                                             |
| ---------------- | ---------------------------------------------------- | ----------------------------------------------------- |
| **功能定位**     | 项目初始化工具                                       | 开发、调试和测试工具                                  |
| **安装方式**     | 通常会全局安装 (`npm install egg-init -g`)           | 通常会项目本地安装 (`npm install egg-bin --save-dev`) |
| **使用场景**     | 创建新项目                                           | 开发、调试、测试现有项目                              |
| **是否依赖项目** | 不依赖具体项目                                       | 必须在 Egg.js 项目中使用                              |
| **主要命令**     | `egg-init <project-name>` 根据提示完成项目初始化工作 | `egg-bin dev`, `egg-bin test`, `egg-bin debug` 等     |
| **生命周期阶段** | 项目启动阶段                                         | 项目开发和测试阶段                                    |
