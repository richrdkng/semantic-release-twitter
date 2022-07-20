const { TwitterApi } = require('twitter-api-v2')

class Twitter {
  constructor (options) {
    this._client = new TwitterApi({
      appKey:       options?.appKey       ?? '*',
      appSecret:    options?.appSecret    ?? '*',
      accessToken:  options?.accessToken  ?? '*',
      accessSecret: options?.accessSecret ?? '*',
    })
  }

  async verifyAuth () {
    let success = false
    let error

    let errorCode    = 200
    let errorMessage = ''
    let errorData    = ''

    try {
      await this._client.v2.me()
      success = true

    } catch (e) {
      success      = false
      error        = e
      errorCode    = e.code
      errorMessage = e.message
      errorData    = JSON.stringify(e.data)
    }

    return {
      success,
      error,
      errorCode,
      errorMessage,
      errorData,
    }
  }

  async postTweet (message) {
    if (message.length > 280) {
      message = message.substring(0, 280)
    }

    console.log('message length', message.length)

    const result = await this._client.v2.tweet({
      text: message,
    })

    console.log(result)
  }

}

module.exports = Twitter
