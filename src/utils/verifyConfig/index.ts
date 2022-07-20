import {
  type PluginConfig,
  type Context,
} from '@types'

import { getConfig } from '@utils'

import {
  E_NO_TWITTER_API_KEY,
  E_NO_TWITTER_API_SECRET_KEY,
  E_NO_TWITTER_ACCESS_TOKEN,
  E_NO_TWITTER_ACCESS_TOKEN_SECRET,
  getError,
} from '@errors'

export const verifyConfig = (pluginConfig: PluginConfig, context: Context) => {
  const errors = []

  const {
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  } = getConfig(pluginConfig, context)

  if (!appKey) {
    errors.push(getError(E_NO_TWITTER_API_KEY))
  }

  if (!appSecret) {
    errors.push(getError(E_NO_TWITTER_API_SECRET_KEY))
  }

  if (!accessToken) {
    errors.push(getError(E_NO_TWITTER_ACCESS_TOKEN))
  }

  if (!accessSecret) {
    errors.push(getError(E_NO_TWITTER_ACCESS_TOKEN_SECRET))
  }

  return errors
}
