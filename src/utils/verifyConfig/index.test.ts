import {
  E_NO_TWITTER_API_KEY,
  E_NO_TWITTER_API_SECRET_KEY,
  E_NO_TWITTER_ACCESS_TOKEN,
  E_NO_TWITTER_ACCESS_TOKEN_SECRET,
} from '@errors'

import { verifyConfig } from '.'

const TWITTER_API_KEY             = { TWITTER_API_KEY:             'api_key'             }
const TWITTER_API_SECRET_KEY      = { TWITTER_API_SECRET_KEY:      'api_secret_key'      }
const TWITTER_ACCESS_TOKEN        = { TWITTER_ACCESS_TOKEN:        'access_token'        }
const TWITTER_ACCESS_TOKEN_SECRET = { TWITTER_ACCESS_TOKEN_SECRET: 'access_token_secret' }

describe('verifyConfig', () => {
  test('Verify all Twitter .env keys are set', () => {
    const errors = verifyConfig(
      {},
      {
        env: {
          ...TWITTER_API_KEY,
          ...TWITTER_API_SECRET_KEY,
          ...TWITTER_ACCESS_TOKEN,
          ...TWITTER_ACCESS_TOKEN_SECRET,
        },
      } as any
    )

    expect(errors).toEqual([])
  })

  test('Return SemanticReleaseError if "TWITTER_API_KEY" is not set', () => {
    const [error] = verifyConfig(
      {},
      {
        env: {
          ...TWITTER_API_SECRET_KEY,
          ...TWITTER_ACCESS_TOKEN,
          ...TWITTER_ACCESS_TOKEN_SECRET,
        },
      } as any
    )

    expect(error.name).toBe('SemanticReleaseError')
    expect(error.code).toBe(E_NO_TWITTER_API_KEY)
    expect(error.message).toBeTruthy()
    expect(error.details).toBeTruthy()
  })

  test('Return SemanticReleaseError if "TWITTER_API_SECRET_KEY" is not set', () => {
    const [error] = verifyConfig(
      {},
      {
        env: {
          ...TWITTER_API_KEY,
          ...TWITTER_ACCESS_TOKEN,
          ...TWITTER_ACCESS_TOKEN_SECRET,
        },
      } as any
    )

    expect(error.name).toBe('SemanticReleaseError')
    expect(error.code).toBe(E_NO_TWITTER_API_SECRET_KEY)
    expect(error.message).toBeTruthy()
    expect(error.details).toBeTruthy()
  })

  test('Return SemanticReleaseError if "TWITTER_ACCESS_TOKEN" is not set', () => {
    const [error] = verifyConfig(
      {},
      {
        env: {
          ...TWITTER_API_KEY,
          ...TWITTER_API_SECRET_KEY,
          ...TWITTER_ACCESS_TOKEN_SECRET,
        },
      } as any
    )

    expect(error.name).toBe('SemanticReleaseError')
    expect(error.code).toBe(E_NO_TWITTER_ACCESS_TOKEN)
    expect(error.message).toBeTruthy()
    expect(error.details).toBeTruthy()
  })

  test('Return SemanticReleaseError if "TWITTER_ACCESS_TOKEN_SECRET" is not set', () => {
    const [error] = verifyConfig(
      {},
      {
        env: {
          ...TWITTER_API_KEY,
          ...TWITTER_API_SECRET_KEY,
          ...TWITTER_ACCESS_TOKEN,
        },
      } as any
    )

    expect(error.name).toBe('SemanticReleaseError')
    expect(error.code).toBe(E_NO_TWITTER_ACCESS_TOKEN_SECRET)
    expect(error.message).toBeTruthy()
    expect(error.details).toBeTruthy()
  })

  test('Return SemanticReleaseError Array if multiple configs are invalid or missing', () => {
    const [
      error1,
      error2,
      error3,
      error4,
    ] = verifyConfig({}, {} as any)

    expect(error1.name).toBe('SemanticReleaseError')
    expect(error1.code).toBe(E_NO_TWITTER_API_KEY)
    expect(error1.message).toBeTruthy()
    expect(error1.details).toBeTruthy()

    expect(error2.name).toBe('SemanticReleaseError')
    expect(error2.code).toBe(E_NO_TWITTER_API_SECRET_KEY)
    expect(error2.message).toBeTruthy()
    expect(error2.details).toBeTruthy()

    expect(error3.name).toBe('SemanticReleaseError')
    expect(error3.code).toBe(E_NO_TWITTER_ACCESS_TOKEN)
    expect(error3.message).toBeTruthy()
    expect(error3.details).toBeTruthy()

    expect(error4.name).toBe('SemanticReleaseError')
    expect(error4.code).toBe(E_NO_TWITTER_ACCESS_TOKEN_SECRET)
    expect(error4.message).toBeTruthy()
    expect(error4.details).toBeTruthy()
  })
})
