const path = require('path')

const resolveApp = relativePath => path.resolve(__dirname, '../', relativePath)

module.exports = {
  entryPath: resolveApp('src/index.js'),
  outputPath: resolveApp('dist'),
  appHtml: resolveApp('public/index.html'),
  alias: resolveApp('src'),
  dllPath: resolveApp('dll'),
  dllManifestPath: resolveApp('dll/vendors.manifest.json')
}
