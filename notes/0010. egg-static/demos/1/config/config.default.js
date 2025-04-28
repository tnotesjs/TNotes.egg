/* eslint valid-jsdoc: "off" */
const path = require('path')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1741486377742_4102'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  // exports.static = {
  //   prefix: '/static/', // 修改静态资源的 URL 前缀
  //   dir: path.join(appInfo.baseDir, 'app/assets'), // 修改静态资源目录
  // }

  return {
    ...config,
    ...userConfig,
  }
}
