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
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      '~~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src/components'),
    },
  },
  target: 'web',
  module: {
    rules: [
      { test: /\.js$/, include: [path.resolve(__dirname, 'src')], loader: 'babel-loader' },
      { test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'style-loader',
        { loader: 'css-loader', options: { modules: true } },
        ] },
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
