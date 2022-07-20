const resolveConfig = require('./resolve-config.js')
const getError      = require('./get-error.js')

module.exports = (pluginConfig, context) => {
  const errors = []

  const {
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  } = resolveConfig(pluginConfig, context)

  if (!appKey) {
    errors.push(getError('ENOTWITTERAPIKEY'))
  }

  if (!appSecret) {
    errors.push(getError('ENOTWITTERAPISECRETKEY'))
  }

  if (!accessToken) {
    errors.push(getError('ENOTWITTERACCESSTOKEN'))
  }

  if (!accessSecret) {
    errors.push(getError('ENOTWITTERACCESSTOKENSECRET'))
  }

  return errors
}
