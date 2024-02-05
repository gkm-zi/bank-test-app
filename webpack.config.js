const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

const isProd = process.env.NODE_ENV === 'production';

const getStylesSettings = (withModules = false) => {
  return [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    withModules
      ? {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]',
            },
          },
        }
      : 'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
      },
    },
    'sass-loader',
  ];
};

module.exports = {
  entry: path.join(srcPath, 'index.tsx'),
  target: isProd ? 'browserslist' : 'web',
  devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    !isProd && new ReactRefreshWebpackPlugin(),
    isProd &&
      new MiniCssExtractPlugin({
        filename: '[name]-[hash].css',
      }),
    new ForkTsCheckerPlugin(),
    new DotenvWebpackPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.module\.s?css$/,
        use: getStylesSettings(true),
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: getStylesSettings(),
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.js', '.jsx', '.ts', '.svg'],
    alias: {
      '@/components': path.join(srcPath, 'components'),
      '@/api': path.join(srcPath, 'api'),
      '@/App': path.join(srcPath, 'App'),
      '@/pages': path.join(srcPath, 'pages'),
      '@/store': path.join(srcPath, 'store'),
      '@/models': path.join(srcPath, 'store/models'),
      '@/ui': path.join(srcPath, 'shared/ui'),
      '@/utils': path.join(srcPath, 'shared/utils'),
      '@/styles': path.join(srcPath, 'shared/styles'),
      '@/assets': path.join(srcPath, 'shared/assets'),
      '@/hooks': path.join(srcPath, 'shared/hooks'),
    },
  },
  devServer: {
    host: '127.0.0.1',
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
};
