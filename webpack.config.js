const path = require("path");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: "./src/chart.js",
  context: __dirname,
  target: "web",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'augmented-next-chart.js',
    publicPath: '/dist/',
    library: "ChartView",
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  stats: "errors-only",
  devtool: "source-map"
};
