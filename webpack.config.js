// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const {
  CheckerPlugin
} = require('awesome-typescript-loader')


module.exports = {
  entry: './app/main.ts',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/,
    }, ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new CheckerPlugin()
  ]
};