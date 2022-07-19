const test = require('ava')

const verify = require('../lib/verify-config.js')

const TWITTER_API_KEY             = { TWITTER_API_KEY:             'api_key'             }
const TWITTER_API_SECRET_KEY      = { TWITTER_API_SECRET_KEY:      'api_secret_key'      }
const TWITTER_ACCESS_TOKEN        = { TWITTER_ACCESS_TOKEN:        'access_token'        }
const TWITTER_ACCESS_TOKEN_SECRET = { TWITTER_ACCESS_TOKEN_SECRET: 'access_token_secret' }

test('Verify all Twitter .env keys are set', t => {
  const errors = verify(
    {},
    {
      env: {
        ...TWITTER_API_KEY,
        ...TWITTER_API_SECRET_KEY,
        ...TWITTER_ACCESS_TOKEN,
        ...TWITTER_ACCESS_TOKEN_SECRET,
      },
    }
  )

  t.deepEqual(errors, [])
})

test('Return SemanticReleaseError if "TWITTER_API_KEY" is not set', t => {
  const [error] = verify(
    {},
    {
      env: {
        ...TWITTER_API_SECRET_KEY,
        ...TWITTER_ACCESS_TOKEN,
        ...TWITTER_ACCESS_TOKEN_SECRET,
      },
    }
  )

  t.is(error.name, 'SemanticReleaseError')
  t.is(error.code, 'ENOTWITTERAPIKEY')
  t.truthy(error.message)
  t.truthy(error.details)
})

test('Return SemanticReleaseError if "TWITTER_API_SECRET_KEY" is not set', t => {
  const [error] = verify(
    {},
    {
      env: {
        ...TWITTER_API_KEY,
        ...TWITTER_ACCESS_TOKEN,
        ...TWITTER_ACCESS_TOKEN_SECRET,
      },
    }
  )

  t.is(error.name, 'SemanticReleaseError')
  t.is(error.code, 'ENOTWITTERAPISECRETKEY')
  t.truthy(error.message)
  t.truthy(error.details)
})

test('Return SemanticReleaseError if "TWITTER_ACCESS_TOKEN" is not set', t => {
  const [error] = verify(
    {},
    {
      env: {
        ...TWITTER_API_KEY,
        ...TWITTER_API_SECRET_KEY,
        ...TWITTER_ACCESS_TOKEN_SECRET,
      },
    }
  )

  t.is(error.name, 'SemanticReleaseError')
  t.is(error.code, 'ENOTWITTERACCESSTOKEN')
  t.truthy(error.message)
  t.truthy(error.details)
})

test('Return SemanticReleaseError if "TWITTER_ACCESS_TOKEN_SECRET" is not set', t => {
  const [error] = verify(
    {},
    {
      env: {
        ...TWITTER_API_KEY,
        ...TWITTER_API_SECRET_KEY,
        ...TWITTER_ACCESS_TOKEN,
      },
    }
  )

  t.is(error.name, 'SemanticReleaseError')
  t.is(error.code, 'ENOTWITTERACCESSTOKENSECRET')
  t.truthy(error.message)
  t.truthy(error.details)
})

test('Return SemanticReleaseError Array if multiple configs are invalid or missing', t => {
  const [
    error1,
    error2,
    error3,
    error4,
  ] = verify({}, {})

  t.is(error1.name, 'SemanticReleaseError')
  t.is(error1.code, 'ENOTWITTERAPIKEY')
  t.truthy(error1.message)
  t.truthy(error1.details)

  t.is(error2.name, 'SemanticReleaseError')
  t.is(error2.code, 'ENOTWITTERAPISECRETKEY')
  t.truthy(error2.message)
  t.truthy(error2.details)

  t.is(error3.name, 'SemanticReleaseError')
  t.is(error3.code, 'ENOTWITTERACCESSTOKEN')
  t.truthy(error3.message)
  t.truthy(error3.details)

  t.is(error4.name, 'SemanticReleaseError')
  t.is(error4.code, 'ENOTWITTERACCESSTOKENSECRET')
  t.truthy(error4.message)
  t.truthy(error4.details)
})
