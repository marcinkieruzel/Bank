//Konfiguracja Webpack
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = () => { // Get the root path (assuming your webpack config is in the root of your project!)

  const env = dotenv.config().parsed;
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    devtool: 'eval-source-map',
    watch: true,
    mode: process.env.APP_MODE,
    entry: {
      main: path.join(__dirname, 'src', 'app.js')
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 4500,
      historyApiFallback: true,
    },
    module: {
      rules: [{
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader'},
            {
              loader: "awesome-typescript-loader"
            },
          ]
        }, {
          test: /\.(png|jpe?g|svg|gif|woff|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        }, {
          test: /\.css/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        }, {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new CheckerPlugin(),
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        hash: true
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }
}
