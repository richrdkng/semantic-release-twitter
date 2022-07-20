const AggregateError = require('aggregate-error')

const _verifyConfig = require('./lib/verify-config')
const _verifyAuth   = require('./lib/utils/verify-auth')
const _prepare      = require('./lib/prepare')
const _publish      = require('./lib/publish')

// -----------------------------------------------------------------------------

let verified
let prepared

// -----------------------------------------------------------------------------

async function verifyConditions(pluginConfig, context) {
  const errors = _verifyConfig(pluginConfig, context)

  try {
    await _verifyAuth(pluginConfig, context)
  } catch (error) {
    errors.push(...error)
  }

  if (errors.length > 0) {
    throw new AggregateError(errors)
  }

  verified = true
}

// -----------------------------------------------------------------------------

async function prepare(pluginConfig, context) {
  const errors = !verified
    ? _verifyConfig(pluginConfig, context)
    : []

  try {
    if (!verified) {
      await _verifyAuth(pluginConfig, context)
    }
  } catch (error) {
    errors.push(...error)
  }

  if (errors.length > 0) {
    throw new AggregateError(errors)
  }

  await _prepare(pluginConfig, context)

  prepared = true
}

// -----------------------------------------------------------------------------

async function publish(pluginConfig, context) {
  const errors = !verified
    ? _verifyConfig(pluginConfig, context)
    : []

  try {
    if (!verified) {
      await _verifyAuth(pluginConfig, context)
    }
  } catch (error) {
    errors.push(...error)
  }

  if (errors.length > 0) {
    throw new AggregateError(errors)
  }

  if (!prepared) {
    await _prepare(pluginConfig, context)
    prepared = true
  }

  await _publish(pluginConfig, context)
}

// -----------------------------------------------------------------------------

module.exports = {
  verifyConditions,

  analyzeCommits: (pluginConfig, context) => {
    console.log('analyzeCommits ------------------------------------------------')
    console.dir(pluginConfig, { depth: 5 })
    console.log('---------------------------------------------------------------')
    console.dir(context, { depth: 5 })
    console.log('---------------------------------------------------------------')
  },

  generateNotes: (pluginConfig, context) => {
    console.log('generateNotes -------------------------------------------------')
    console.dir(pluginConfig, { depth: 5 })
    console.log('---------------------------------------------------------------')
    console.dir(context, { depth: 5 })
    console.log('---------------------------------------------------------------')
  },

  prepare,
  publish,
}
