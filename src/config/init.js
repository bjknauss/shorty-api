const debug = require('debug')('shorty:config')

/**
 *
 * @param {import("convict").Config} convictConfig
 */
function init(convictConfig) {
  debug('Initializing config...')
  if (convictConfig.configFile) {
    debug(`Loading config file: ${convictConfig.configFile}`)
    convictConfig.loadFile(convictConfig.configFile)
  }
}

module.exports = init
