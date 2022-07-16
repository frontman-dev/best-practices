const baseConfig = require("../webpack.config")

module.exports = ({ config: storybookBaseConfig }) => {
  storybookBaseConfig.resolve.alias = baseConfig.resolve.alias
  storybookBaseConfig.resolve.extensions = baseConfig.resolve.extensions
  storybookBaseConfig.module.rules = baseConfig.module.rules

  return storybookBaseConfig
}
