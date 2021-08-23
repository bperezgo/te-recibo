const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {
  DefinePlugin,
  SourceMapDevToolPlugin,
} = require('webpack');
const { moduleResolve } = require('./shared.config');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config({ path: './.env' });

const config = {
  entry: [
    'react-hot-loader/patch',
    '@babel/polyfill',
    './src/index.tsx',
  ],
  resolve: {
    ...moduleResolve,
  },
  output: {
    filename: 'assets/bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.tsx?$/,
        use: [{ loader: 'ts-loader', options: { happyPackMode: true } }],
        exclude: path.resolve(process.cwd(), 'node_modules'),
        include: path.resolve(process.cwd(), 'src'),
      },
      {
        test: /\.(s?)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
			title: process.env.APP_TITLE,
      template: './src/index.html',
    }),
    new SourceMapDevToolPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PORT': JSON.stringify(process.env.PORT),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles.css',
    }),
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [['optipng', { optimizationLevel: 5 }]],
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
		compress: true,
    hot: true,
    port: parseInt(process.env.PORT, 10),
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'assets/vendors.js',
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};

module.exports = config;
