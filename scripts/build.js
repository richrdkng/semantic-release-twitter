const { build }               = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

;(async () => {
  await build({
    platform: 'node',
    target:   ['node14'],

    bundle:    true,
    sourcemap: true,

    outfile:     '.dist/index.js',
    entryPoints: ['src/index.ts'],

    plugins: [
      nodeExternalsPlugin(),
    ],
  })
})()
