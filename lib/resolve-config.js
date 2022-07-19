module.exports = (pluginConfig, context) => {
  const { env } = context

  return {
    appKey:       env?.TWITTER_API_KEY,
    appSecret:    env?.TWITTER_API_SECRET_KEY,
    accessToken:  env?.TWITTER_ACCESS_TOKEN,
    accessSecret: env?.TWITTER_ACCESS_TOKEN_SECRET,
  }
}
