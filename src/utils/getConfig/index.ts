// TODO: option.glob : string[]
// TODO: option.preset/template : string
// TODO: option.checkAuth/verifyAuth : boolean (whether check twitter auth)

import {
  type PluginConfig,
  type Context,
} from '@types'

export const getConfig = (pluginConfig: PluginConfig, context: Context) => {
  // const glob = pluginConfig.glob ?? [
  //   '*.tweet.js',
  //   '*.tweet',
  // ]

  // const preset = pluginConfig.preset ?? 'default'

  const { env } = context

  const appKey       = env?.TWITTER_API_KEY             ?? ''
  const appSecret    = env?.TWITTER_API_SECRET_KEY      ?? ''
  const accessToken  = env?.TWITTER_ACCESS_TOKEN        ?? ''
  const accessSecret = env?.TWITTER_ACCESS_TOKEN_SECRET ?? ''

  return {
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  }
}
