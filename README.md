# semantic-release-twitter

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to post release updates on Twitter.

## Install

```bash
$ npm install semantic-release-twitter -D
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["semantic-release-twitter",
      {
        "TODO": "..."
      }
    ]
  ]
}
```

## Configuration

### Environment variables

| Variable | Description |
| ---      | ---         |
| `TWITTER_API_KEY` | **Required.** The Twitter API key. See [Git environment variables][url-git-env-vars]. |
| `TWITTER_API_SECRET_KEY` | **Required.** The Twitter API secret key. See [Git environment variables][url-git-env-vars]. |
| `TWITTER_ACCESS_TOKEN`  | **Required.** The Twitter access token. See [Git environment variables][url-git-env-vars]. |
| `TWITTER_ACCESS_TOKEN_SECRET` | **Required.** The Twitter access token secret. See [Git environment variables][url-git-env-vars]. |

### Options

| Options | Description | Default |
| ---     | ---         | ---     |
| `TODO`  | TODO.       | `TODO`  |

### Examples

TODO

## License

[MIT][url-license] @ [richrdkng][url-website]

<!--- References =========================================================== -->

<!--- URLs -->
[url-website]:      https://www.richrdkng.com
[url-license]:      https://github.com/intradoc/intradoc/blob/master/LICENSE.md
[url-git-env-vars]: https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables#_committing
