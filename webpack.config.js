const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
          // { test: /\.js$/,
          //   exclude: /node_modules/,
          //   use: 'babel-loader' }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: "./index.html",
          filename: "./index.html"
        })
      ]
}