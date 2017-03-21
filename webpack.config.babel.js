import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  target: 'web',
  module: {
    rules: [
      { test: /\.js$/, include: [path.resolve(__dirname, 'src')], loader: 'babel-loader' },
    ],
  },
  plugins: [
    new Copy([
      { from: 'src/index.html' },
      { from: 'src/normalize.css' },
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
};
