import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const conf = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom'],
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: { loader: 'css-loader', options: { modules: true } },
        }),
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
};

// Setup webpack plugins
conf.plugins = [

  // always enables plugins
  new webpack.optimize.CommonsChunkPlugin('vendor'),
  new Copy([
    { from: 'src/index.html' },
    { from: 'src/normalize.css' },
  ]),
  new ExtractTextPlugin('styles.css'),

].concat(process.NODE_ENV !== 'production' ? [

  // development plugins
  new webpack.HotModuleReplacementPlugin(),

] : [

  // production plugins
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.EnvironmentPlugin({
    NODE_ENV: process.env.NODE_ENV,
  }),

]);

export default conf;
