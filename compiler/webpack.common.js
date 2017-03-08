import PATHS from './paths'

// Plugins
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

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
      template: PATHS.template
    }),
    new CleanWebpackPlugin([ PATHS.build ], {
      root: PATHS.root
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.app,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

export default common
