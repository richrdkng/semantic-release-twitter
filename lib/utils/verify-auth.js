const AggregateError = require('aggregate-error')

const resolveConfig = require('./resolve-config.js')
const getError      = require('./get-error.js')
const Twitter       = require('./twitter')

module.exports = async (pluginConfig, context) => {
  const {
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  } = resolveConfig(pluginConfig, context)

  const twitter = new Twitter({
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  })

  const result = await twitter.verifyAuth()

  if (result.error) {
    throw new AggregateError([getError('ETWITTERAUTH', result)])
  }
}
