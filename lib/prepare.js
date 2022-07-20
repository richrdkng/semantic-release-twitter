const path = require('path')
// const {readFile, writeFile, ensureFile} = require('fs-extra')

const resolveConfig = require('./utils/resolve-config')

module.exports = async (pluginConfig, context) => {
  const {
    cwd,
    nextRelease: {notes},
    logger,
  } = context

  const {
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  } = resolveConfig(pluginConfig, context)

  // const changelogPath = path.resolve(cwd, changelogFile)

  console.log('prepare.js ----------------------------------------------------')
  console.dir(pluginConfig, { depth: 5 })
  console.log('---------------------------------------------------------------')
  console.dir(context, { depth: 5 })
  console.log('---------------------------------------------------------------')

  if (notes) {
    console.log('-------------------------------------------------------------')
    console.log(notes)
    console.log('-------------------------------------------------------------')

    // await ensureFile(changelogPath)
    // const currentFile = (await readFile(changelogPath)).toString().trim()

    // if (currentFile) {
    //   logger.log('Update %s', changelogPath)
    // } else {
    //   logger.log('Create %s', changelogPath)
    // }

    // const currentContent =
    //   changelogTitle && currentFile.startsWith(changelogTitle)
    //     ? currentFile.slice(changelogTitle.length).trim()
    //     : currentFile
    // const content = `${notes.trim()}\n${currentContent ? `\n${currentContent}\n` : ''}`

    // await writeFile(changelogPath, changelogTitle ? `${changelogTitle}\n\n${content}` : content)
  }
}
