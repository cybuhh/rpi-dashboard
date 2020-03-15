// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.jsx',
  devtool: 'cheap-module-source-map',
  optimization: {
    splitChunks: {
        chunks: 'all',
        name: 'vendors',
    },
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  externals: {
    'chart.js': 'Chart',
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '',
    pathinfo: true,
  },
  devServer: {
    contentBase: 'public',
    port: 8000,
    hot: true,
    stats: {
        all: true,
        modules: true,
        maxModules: 0,
        errors: true,
        assets: true,
        warnings: true,
    },
  },
  module: {
    rules: [{
      oneOf: [
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve('url-loader'),
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-env']
          },
        },
        {
          test: /\.css$/,
          loader: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.(scss|sass)$/,
            exclude: /\.module\.(scss|sass)$/,
            loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          loader: 'file-loader',
          exclude: [/\.jsx?$/, /\.html$/, /\.json$/],
        }
      ],
    
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
    // new BundleAnalyzerPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
],
};
