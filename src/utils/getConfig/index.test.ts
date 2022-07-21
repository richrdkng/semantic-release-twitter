import { getConfig } from '.'

const TWITTER_API_KEY             = { TWITTER_API_KEY:             'api_key'             }
const TWITTER_API_SECRET_KEY      = { TWITTER_API_SECRET_KEY:      'api_secret_key'      }
const TWITTER_ACCESS_TOKEN        = { TWITTER_ACCESS_TOKEN:        'access_token'        }
const TWITTER_ACCESS_TOKEN_SECRET = { TWITTER_ACCESS_TOKEN_SECRET: 'access_token_secret' }

describe('getConfig', () => {
  test('Get Twitter tokens', () => {
    const config = getConfig(
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

    expect(config.appKey).toBe(TWITTER_API_KEY.TWITTER_API_KEY)
    expect(config.appSecret).toBe(TWITTER_API_SECRET_KEY.TWITTER_API_SECRET_KEY)
    expect(config.accessToken).toBe(TWITTER_ACCESS_TOKEN.TWITTER_ACCESS_TOKEN)
    expect(config.accessSecret).toBe(TWITTER_ACCESS_TOKEN_SECRET.TWITTER_ACCESS_TOKEN_SECRET)
  })
})
