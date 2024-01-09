const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvWebpack = require('dotenv-webpack')

module.exports = {
  entry: path.resolve(__dirname, './src'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new DotenvWebpack(),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
  },
}
