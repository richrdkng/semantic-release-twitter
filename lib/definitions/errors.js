const pkg = require('../../package.json')

const [homepage] = pkg.homepage.split('#')
const linkify    = (file) => `${homepage}/blob/master/${file}`

module.exports = {
  ENOTWITTERAPIKEY: () => ({
    message: 'No Twitter API key specified.',
    details: `A [Twitter API key](${linkify(
      'README.md#twitter'
    )}) must be created and set in the \`TWITTER_API_KEY\` environment variable on your CI environment.

Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard) page, then set \`TWITTER_API_KEY\` environment variable on your CI environment.`,
  }),

  ENOTWITTERAPISECRETKEY: () => ({
    message: 'No Twitter API secret key specified.',
    details: `A [Twitter API secret key](${linkify(
      'README.md#twitter'
    )}) must be created and set in the \`TWITTER_API_SECRET_KEY\` environment variable on your CI environment.

Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard) page, then set \`TWITTER_API_SECRET_KEY\` environment variable on your CI environment.`,
  }),

  ENOTWITTERACCESSTOKEN: () => ({
    message: 'No Twitter access token specified.',
    details: `A [Twitter access token](${linkify(
      'README.md#twitter'
    )}) must be created and set in the \`TWITTER_ACCESS_TOKEN\` environment variable on your CI environment.

Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard) page, then set \`TWITTER_ACCESS_TOKEN\` environment variable on your CI environment.`,
  }),

  ENOTWITTERACCESSTOKENSECRET: () => ({
    message: 'No Twitter access token secret specified.',
    details: `A [Twitter access token secret](${linkify(
      'README.md#twitter'
    )}) must be created and set in the \`TWITTER_ACCESS_TOKEN_SECRET\` environment variable on your CI environment.

Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard) page, then set \`TWITTER_ACCESS_TOKEN_SECRET\` environment variable on your CI environment.`,
  }),

  ETWITTERAUTH: ({ errorCode, errorMessage, errorData }) => ({
    message: `Twitter authentication or authorization failed with "${errorMessage}", code: ${errorCode}.`,
    details: `A proper [Twitter app](${linkify(
      'README.md#twitter'
    )}) must be created and configured (error data: ${errorData}).

Please setup an app on your [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard) page and configure with proper settings.`,
  }),
}
