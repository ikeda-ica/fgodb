const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

module.exports = [
  {
    entry: './src/index.js',
    module: {
      loaders: [
        {
          test: /.js?$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
          query:{
            presets: ['env'],
            plugins: ['transform-react-jsx', 'transform-object-rest-spread']
          }
        }, {
          test: /\.(jpg|png)$/,
          loaders: 'url-loader'
        }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      publicPath: 'dist/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
      new UglifyJSPlugin()
    ]
  }
];
