const Twitter = require('./utils/twitter')

module.exports = async (pluginConfig, context) => {
  const {
    cwd,
    env,
    stdout,
    stderr,
    nextRelease,
    logger,
  } = context

  console.log('publish.js ----------------------------------------------------')
  console.dir(pluginConfig, { depth: 5 })
  console.log('---------------------------------------------------------------')
  console.dir(context, { depth: 5 })
  console.log('---------------------------------------------------------------')

  const notes = nextRelease.notes

  if (notes) {
    const {
      appKey,
      appSecret,
      accessToken,
      accessSecret,
    } = resolveConfig(pluginConfig, context)

    const twitter = new Twitter({
      appKey,
      appSecret,
      accessToken,
      accessSecret,
    })

    await twitter.verifyAuth()
    await twitter.postTweet(notes)
  }

  // logger.log(`Publishing version ${version} to apm registry`)

  // const result = execa('apm', ['publish', '--tag', gitTag], {
  //   cwd,
  //   env,
  // })
  // result.stdout.pipe(stdout, {end: false})
  // result.stderr.pipe(stderr, {end: false})
  // await result

  // logger.log(`Published ${name}@${version}`)
  // return {name: 'Atom package', url: `https://atom.io/packages/${name}`}
}
