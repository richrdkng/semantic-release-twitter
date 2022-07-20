const execa = require('execa')

const _getFilesInCommit = async (sha, options = {}) => {
  let files = []

  try {
    const { stdout } = await execa(
      'git',
      [
        '--no-pager',
        'diff',
        '--name-only',
        sha,
      ],
      {
        ...options,
      }
    )
    files = stdout.split(/\r?\n/)

  } catch (e) {
    // noop
  }

  return files
}

const _glob = async () => {}

module.exports = async (pluginConfig, context, debug = {}) => {
  const getFilesInCommit = debug?.getFilesInCommit ?? _getFilesInCommit

  const {
    cwd,
    env,
    commits,
  } = context

  let files = []

  // console.log(commits)
  // const id = '675e6e5cb7c4ba06d8fec2140d66f138a5437475'

  for await (const { hash } of commits) {
    files.push(
      ...(await getFilesInCommit(hash, { cwd, env }))
    )
  }

  // deduplicate array
  files = [...new Set(files)]

  console.log(files)
}
