const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.(png|svg|jpg|gif)$/,  use: "file-loader" },
      { test: /\.css$/, use: ['style-loader','css-loader']},    
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
          { from: path.resolve(__dirname, './static') }
      ]
  }),
  ],
};
