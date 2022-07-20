import type { SemanticReleasePlugin } from '@types'

import { AggregateError } from '@errors'

import {
  verifyConfig,
  verifyTwitter,
} from '@utils'

// -----------------------------------------------------------------------------

import {
  prepare,
  publish,
} from './methods'

// -----------------------------------------------------------------------------

let verified = false
let prepared = false

// -----------------------------------------------------------------------------

const plugin: SemanticReleasePlugin = {
  verifyConditions: async (pluginConfig, context) => { // ----------------------
    const errors = verifyConfig(pluginConfig, context)

    try {
      await verifyTwitter(pluginConfig, context)
    } catch (error: any) {
      errors.push(...error)
    }

    if (errors.length > 0) {
      throw new AggregateError(errors)
    }

    verified = true
  },

  prepare: async (pluginConfig, context) => { // -------------------------------
    const errors = !verified
      ? verifyConfig(pluginConfig, context)
      : []

    try {
      if (!verified) {
        await verifyTwitter(pluginConfig, context)
      }
    } catch (error: any) {
      errors.push(...error)
    }

    if (errors.length > 0) {
      throw new AggregateError(errors)
    }

    await prepare(pluginConfig, context)

    prepared = true
  },

  publish: async (pluginConfig, context) => { // -------------------------------
    const errors = !verified
      ? verifyConfig(pluginConfig, context)
      : []

    try {
      if (!verified) {
        await verifyTwitter(pluginConfig, context)
      }
    } catch (error: any) {
      errors.push(...error)
    }

    if (errors.length > 0) {
      throw new AggregateError(errors)
    }

    if (!prepared) {
      await prepare(pluginConfig, context)
      prepared = true
    }

    await publish(pluginConfig, context)
  },
}

export default plugin
