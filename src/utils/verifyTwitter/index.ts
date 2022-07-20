import { AggregateError } from '@errors'

import {
  type PluginConfig,
  type Context,
} from '@types'

import {
  getConfig,
  Twitter,
} from '@utils'

import {
  E_TWITTER_AUTH,
  getError,
} from '@errors'

export const verifyTwitter = async (pluginConfig: PluginConfig, context: Context) => {
  const {
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  } = getConfig(pluginConfig, context)

  const twitter = new Twitter({
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  })

  const result = await twitter.verifyAuth()

  if (result.error) {
    throw new AggregateError([getError(E_TWITTER_AUTH, result)])
  }
}
