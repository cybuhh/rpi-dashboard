const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.jsx',
  devtool: 'cheap-module-source-map',
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
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
          loader: ['style-loader', 'css-loader']
        },
        {
            test: /\.(scss|sass)$/,
            exclude: /\.module\.(scss|sass)$/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          loader: 'file-loader',
          exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/],
        }
      ],
    
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    // new webpack.HotModuleReplacementPlugin(),
],
};
