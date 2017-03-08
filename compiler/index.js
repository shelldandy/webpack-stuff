import webpack from 'webpack'
import commonConfig from './webpack.common'

const compiler = webpack(commonConfig)
compiler.run((err, stats) => {
  if (err) console.log(err)
  console.log(stats)
})
