/* eslint valid-jsdoc: "off" */

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
  config.keys = appInfo.name + '_1741615691468_6783'

  // add your middleware config here
  config.middleware = ['aMid', 'bMid', 'cMid']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  // disable default middleware i18n
  config.i18n = {
    enable: false,
  }

  return {
    ...config,
    ...userConfig,
  }
}
