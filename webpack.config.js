/* eslint import/no-unresolved: 0 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    path: path.resolve(__dirname, './src/index.js'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Leaderboard',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    hot: true,
  },
};