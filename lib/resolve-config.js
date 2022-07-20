// TODO: option.glob : string[]
// TODO: option.preset/template : string
// TODO: option.checkAuth/verifyAuth : boolean (whether check twitter auth)

module.exports = (pluginConfig, context) => {
  // const glob = pluginConfig.glob ?? [
  //   '*.tweet.js',
  //   '*.tweet',
  // ]

  // const preset = pluginConfig.preset ?? 'default'

  const { env } = context

  const appKey       = env?.TWITTER_API_KEY
  const appSecret    = env?.TWITTER_API_SECRET_KEY
  const accessToken  = env?.TWITTER_ACCESS_TOKEN
  const accessSecret = env?.TWITTER_ACCESS_TOKEN_SECRET

  return {
    glob,
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  }
}
