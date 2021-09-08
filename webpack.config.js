const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { moduleResolve } = require('./shared.config');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config({ path: './.env' });

const config = {
  entry: ['./src/index.tsx'],
  resolve: {
    ...moduleResolve,
  },
  output: {
    filename: 'assets/bundle-[fullhash].js',
    path: path.resolve(__dirname, 'public'),
    chunkFilename: 'assets/bundle-[fullhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jsjsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /.tsx?$/,
      //   use: [{ loader: 'ts-loader', options: { happyPackMode: true } }],
      //   exclude: path.resolve(process.cwd(), 'node_modules'),
      //   include: path.resolve(process.cwd(), 'src'),
      // },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
      // {
      //   test: /\.(png|gif|jpe?g)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'assets/[name]-[fullhash].[ext]',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpe?g)$/,
        type: 'asset/resource', // Podemos trabajar las importaciones de archivos directamente
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.APP_TITLE,
      template: './src/index.html',
    }),
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: ['/search'],
          crawlDelay: 2,
        },
        {
          userAgent: '*',
          allow: '/',
          disallow: '/search',
          crawlDelay: 10,
          cleanParam: 'ref /articles/',
        },
      ],
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.SERVER_HOST': JSON.stringify(process.env.SERVER_HOST),
      'process.env.USER_POOL_ID': JSON.stringify(process.env.USER_POOL_ID),
      'process.env.USER_POOL_CLIENT_ID': JSON.stringify(
        process.env.USER_POOL_CLIENT_ID
      ),
      'process.env.REGION': JSON.stringify(process.env.REGION),
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles-[fullhash].css',
    }),
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [['optipng', { optimizationLevel: 5 }]],
      },
    }),
    new CompressionPlugin({
      test: /\.js$|\.css$/,
      filename: '[path][base].gz',
    }),
    new WebpackManifestPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          name: 'commons',
          filename: 'assets/common-[chunkhash].js',
          reuseExistingChunk: true,
          enforce: true,
          priority: 20,
        },
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'assets/vendors-[chunkhash].js',
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};

module.exports = config;
