# [0010. egg-static](https://github.com/Tdahuyou/TNotes.egg/tree/main/notes/0010.%20egg-static)

<!-- region:toc -->
- [1. 🔗 `egg-static` github](#1--egg-static-github)
- [2. 🤔 为什么 Egg.js 能够映射静态资源？](#2--为什么-eggjs-能够映射静态资源)
- [3. 📒 `egg-static` 简介](#3--egg-static-简介)
- [4. 📒 `egg-static` 核心功能](#4--egg-static-核心功能)
<!-- endregion:toc -->

## 1. 🔗 `egg-static` github

https://github.com/eggjs/static

## 2. 🤔 为什么 Egg.js 能够映射静态资源？

- Egg.js 之所以能够映射静态资源，并非它本身具有这样的能力，而是它在内部使用了插件 `egg-static`。
- Egg.js 本身其实只是搭建了一个框架，制定了一套规范，其他的额外功能（静态资源映射、定时任务、消息订阅、后台逻辑等等）都是靠各种插件完成的。

## 3. 📒 `egg-static` 简介

- **`egg-static` 是 Egg.js 内置的静态资源服务插件**，遵循约定优于配置的原则，默认提供简单易用的静态资源服务。
- `egg-static` 是基于 [@eggjs/koa-static-cache](https://github.com/eggjs/koa-static-cache) 实现的。
- `egg-static` 基于 Koa 的中间件机制实现，允许开发者将项目中的静态文件（如 HTML、CSS、JavaScript、图片等）直接暴露给客户端访问。
- 通过 `egg-static` 插件，开发者无需额外配置复杂的静态资源服务器（如 Nginx），即可快速搭建一个支持静态资源的服务环境。这在开发阶段尤其有用，可以显著提高开发效率。
- `egg-static` 适合在开发环境和小型项目中使用，但在生产环境中建议结合 Nginx 或 CDN 提高性能。
- 通过配置文件，可以灵活地自定义静态资源目录、URL 前缀、缓存策略等。

## 4. 📒 `egg-static` 核心功能

- **提供静态资源服务**
  - `egg-static` 会自动将指定目录中的静态文件映射到 HTTP 请求路径。
  - 默认情况下，静态资源存放在 `app/public` 目录下，客户端可以通过 `/public/*` 路径访问这些资源。
    - 请求路径 `/public/*` 中 `*` 位置对应的请求将被映射到 `app/public` 目录。
    - eg. `GET /public/index.html` 将映射到 `app/public/index.html` 文件。
- **支持多环境配置**
  - 在开发环境中，`egg-static` 可以直接提供静态资源服务。
  - 在生产环境中，通常建议使用更高效的静态资源服务（如 Nginx 或 CDN），但 `egg-static` 仍然可以作为备用方案。
- **高度可配置**
  - 开发者可以通过配置文件（如 `config/config.default.js`）自定义：
    - 静态资源的目录
    - 缓存策略
    - 文件匹配规则
    - ……
