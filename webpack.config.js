const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'presentation-chart.js',
    publicPath: '/dist/',
    library: "presentation-chart",
    globalObject: 'this',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  stats: "errors-only",
  devtool: "source-map",
  externals: {
    'presentation-mediator': {
      commonjs: 'presentation-mediator',
      commonjs2: 'presentation-mediator',
      amd: 'presentation-mediator',
      root: 'presentation-mediator'
    },
    'presentation-dom': {
      commonjs: 'presentation-dom',
      commonjs2: 'presentation-dom',
      amd: 'presentation-dom',
      root: 'presentation-dom'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
