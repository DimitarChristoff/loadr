const path                = require('path');
const webpack             = require('webpack');
const pkg                 = require('../package.json');

const __DEV_INPUT__       = path.join(__dirname, '..', 'example');

module.exports = {

  devtool: 'eval-source-map',

  entry: {
    examples: [path.join(__DEV_INPUT__, 'index.js')]
  },

  output: {
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'tests'),
        path.join(__dirname, 'examples')
      ],
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: [
          ['env', {
            useBuiltIns: true
          }],
          'stage-0'
        ]
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

  resolve: {
    extensions: ['.js']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ]
};
