import { TwitterApi } from "twitter-api-v2"

type Options = {
  appKey:       string
  appSecret:    string
  accessToken:  string
  accessSecret: string
}

export class Twitter {
  private _client: TwitterApi

  constructor (options: Options) {
    this._client = new TwitterApi({
      appKey:       options?.appKey       ?? '*',
      appSecret:    options?.appSecret    ?? '*',
      accessToken:  options?.accessToken  ?? '*',
      accessSecret: options?.accessSecret ?? '*',
    })
  }

  async verifyAuth () {
    return this._auth()
  }

  async postTweet (message: string) {
    if (message.length > 280) {
      message = message.substring(0, 280)
    }

    console.log('message length:', message.length)
    console.log(`message: "${message}"`)

    const result = await this._client.v2.tweet({
      text: message,
    })

    console.log(result)
  }

  private async _auth () {
    let success = false
    let error: any

    let errorCode    = 200
    let errorMessage = ''
    let errorData    = ''

    try {
      await this._client.v2.me()
      success = true

    } catch (e: any) {
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
}
