const PATHS = require('./paths')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Test'
    }),
    new CleanWebpackPlugin([ PATHS.build ], {
      root: PATHS.root
    })
  ]
}

module.exports = common
