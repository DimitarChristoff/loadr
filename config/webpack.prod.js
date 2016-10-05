const path                = require('path');
const webpack             = require('webpack');

const __OUTPUT__          = path.join(__dirname, '..', 'dist');
const __INPUT__           = path.join(__dirname, '..', 'src');
const __COMPONENT_NAME__  = 'loadr';

module.exports = {

  devtool: 'source-map',

  debug: true,

  context: __dirname,

  entry: {
    index: [
      path.join(__INPUT__, 'loadr.js')
    ]
  },

  output: {
    path: __OUTPUT__,
    publicPath: '/',
    filename: `${__COMPONENT_NAME__}.min.js`,
    library: __COMPONENT_NAME__,
    libraryTarget: 'umd'
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

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false, //prod
      comments: false //prod
    })
  ],

  resolve: {
    extensions: ['', '.js']
  }
};
