import SemanticReleaseError from '@semantic-release/error'
import dedent from 'ts-dedent'

import pkg from '../../../package.json'

// -----------------------------------------------------------------------------

type Error =
    typeof E_NO_TWITTER_API_KEY
  | typeof E_NO_TWITTER_API_SECRET_KEY
  | typeof E_NO_TWITTER_ACCESS_TOKEN
  | typeof E_NO_TWITTER_ACCESS_TOKEN_SECRET
  | typeof E_TWITTER_AUTH

// -----------------------------------------------------------------------------

export const E_NO_TWITTER_API_KEY             = 'ENOTWITTERAPIKEY'
export const E_NO_TWITTER_API_SECRET_KEY      = 'ENOTWITTERAPISECRETKEY'
export const E_NO_TWITTER_ACCESS_TOKEN        = 'ENOTWITTERACCESSTOKEN'
export const E_NO_TWITTER_ACCESS_TOKEN_SECRET = 'ENOTWITTERACCESSTOKENSECRET'
export const E_TWITTER_AUTH                   = 'ETWITTERAUTH'

const POSSIBLE_ERRORS = [
  E_NO_TWITTER_API_KEY,
  E_NO_TWITTER_API_SECRET_KEY,
  E_NO_TWITTER_ACCESS_TOKEN,
  E_NO_TWITTER_ACCESS_TOKEN_SECRET,
  E_TWITTER_AUTH,
] as const

// -----------------------------------------------------------------------------

const link = (file: string) => {
  const [homepage] = pkg.homepage.split('#')
  return `${homepage}/blob/master/${file}`
}

// -----------------------------------------------------------------------------

export const getError = (error: Error, context: Record<string, any> = {}) => {
  let message = ''
  let details = ''

  switch (error) {
    case E_NO_TWITTER_API_KEY:
      message = 'No Twitter API key specified.'
      details = dedent`
        A [Twitter API key](${link('README.md#twitter')}) must be created
        and set in the \`TWITTER_API_KEY\` environment variable on your CI environment.

        Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
        page, then set \`TWITTER_API_KEY\` environment variable on your CI environment.
      `
      break

    case E_NO_TWITTER_API_SECRET_KEY:
      message = 'No Twitter API secret key specified.'
      details = dedent`
        A [Twitter API secret key](${link('README.md#twitter')}) must be created
        and set in the \`TWITTER_API_SECRET_KEY\` environment variable on your CI environment.

        Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
        page, then set \`TWITTER_API_SECRET_KEY\` environment variable on your CI environment.
      `
      break

    case E_NO_TWITTER_ACCESS_TOKEN:
      message = 'No Twitter access token specified.'
      details = dedent`
        A [Twitter access token](${link('README.md#twitter')}) must be created
        and set in the \`TWITTER_ACCESS_TOKEN\` environment variable on your CI environment.

        Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
        page, then set \`TWITTER_ACCESS_TOKEN\` environment variable on your CI environment.
      `
      break

    case E_NO_TWITTER_ACCESS_TOKEN_SECRET:
      message = 'No Twitter access token secret specified.'
      details = dedent`
        A [Twitter access token secret](${link('README.md#twitter')}) must be created
        and set in the \`TWITTER_ACCESS_TOKEN_SECRET\` environment variable on your CI environment.

        Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
        page, then set \`TWITTER_ACCESS_TOKEN_SECRET\` environment variable on your CI environment.
      `
      break

    case E_TWITTER_AUTH:
      const { errorCode, errorMessage, errorData } = context

      message = `Twitter authentication or authorization failed with "${errorMessage}", code: ${errorCode}.`
      details = dedent`
        A proper [Twitter app](${link('README.md#twitter')}) must be created
        and configured (error data: ${errorData}).

        Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
        page and configure with proper settings.
      `
      break

    default:
      throw new Error(`Unknown error value "${error}". Possible error values: [${POSSIBLE_ERRORS.join(', ')}].`)
  }

  return new SemanticReleaseError(message, error, details)
}
