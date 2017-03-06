const path = require('path')

const base = process.cwd()

const PATHS = {
  app: path.join(base, 'src'),
  build: path.join(base, 'dist'),
  template: path.join(base, 'src', 'index.html'),
  root: base
}

module.exports = PATHS
