import type { SemanticReleaseLifecycle } from '@types'

import { getConfig } from '@utils'

export const prepare: SemanticReleaseLifecycle = async (pluginConfig, context) => {
  const {
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  } = getConfig(pluginConfig, context)

  console.log('prepare.js ----------------------------------------------------')
  console.dir(pluginConfig, { depth: 5 })
  console.log('---------------------------------------------------------------')
  console.dir(context, { depth: 5 })
  console.log('---------------------------------------------------------------')

  const { notes } = context.nextRelease!

  if (notes) {
    console.log('-------------------------------------------------------------')
    console.log(notes)
    console.log('-------------------------------------------------------------')
  }
}
