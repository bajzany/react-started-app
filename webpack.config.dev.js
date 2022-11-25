const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const {
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  disableEsLint,
} = require('customize-cra')

module.exports = function (config, envs) {
  config = addDecoratorsLegacy({})(config, envs)
  config = disableEsLint({})(config, envs)
  config = fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  })(config, envs)

  config = addLessLoader({
    javascriptEnabled: true,
  })(config, envs)

  // config.entry = [
  //   'react-hot-loader/patch',
  //   config.entry,
  // ]
  // config.resolve.alias = {
  //   ...config.resolve.alias,
  //   'react-dom': '@hot-loader/react-dom',
  // }

  config.resolve.plugins.push(new TsconfigPathsPlugin({}))

  return config
}
