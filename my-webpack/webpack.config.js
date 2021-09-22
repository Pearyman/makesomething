// webpack config

const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const styleLintPlugin = require('stylelint-webpack-plugin')
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const htmlWebpackPlugin = require('html-webpack-plugin')
const eslintPlugin = require('eslint-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

  mode: 'production',

  entry: './src/index.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      // babel js config
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { 
                targets: "defaults" ,
                useBuiltIns: 'usage', // 按需加载 
                corejs: 3
              }]
            ]
          }
        }
      },
      // 指定多个配置规则
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'image/[name][ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        // 文件<8k, 使用asset/inline
        type: 'asset',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),

    // css 校验
    new styleLintPlugin({
      files: ['src/css/*.{css,less,sass,scss}']
    }),

    // 压缩css
    new optimizeCssAssetsWebpackPlugin(),

    // html config
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      title: "webpack demo",
      minfy: {

      }
    }),
    new eslintPlugin({
      fix: true
    }),
    new copyWebpackPlugin({
      patterns:[
        {
          from: 'public',
          to: 'public'
        }
      ]
    }),
    new CleanWebpackPlugin()
  ],

  devServer: {
    compress: true, // gzip compress
    port: 9200,
    open: true,
    liveReload: true,
     // proxySetup
    proxy:{
      
      '/api':{
        target: 'https://api.github.com',
        pathRewrite:{
          '^/api': ''
        },
        changeOrigin: true,
      }
    }

  },
  target: 'web',

  performance:{
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },


}