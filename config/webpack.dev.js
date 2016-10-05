const path                = require('path')
const webpack             = require('webpack')
const pkg                 = require('../package.json')

const __DEV_INPUT__       = path.join(__dirname, '..', 'example')

module.exports = {

  devtool: 'eval-source-map',

  context: __dirname,

  entry: {
    examples: [path.join(__DEV_INPUT__, 'index.js')]
  },

  output: {
    filename: `[name].js`
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0']
      }
    }]
  },

  devServer: {
    contentBase: __DEV_INPUT__,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    staticOptions: {},
  },

  plugins: [
  ],

  resolve: {
    extensions: ['', '.js']
  }
}
