const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    }
  },{
    entry: {
      style: './src/style/style.scss'
    },
    output: {
      path: path.join(__dirname, 'dist/'),
      filename: 'style.css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [new ExtractTextPlugin('[name].css')]
  }
];
