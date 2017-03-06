import path from 'path'

const base = process.cwd()

const PATHS = {
  app: path.join(base, 'src'),
  build: path.join(base, 'dist'),
  template: path.join(base, 'src', 'index.html'),
  root: base
}

export default PATHS
