const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig,{
  devtool:'inline-source-map',
  output:{
    filename:'js/[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    })
  ],
  module:{
    rules:[
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              name: '[name][hash].[ext]',
              outputPath: 'images/'
            }
          }
          
        ]
      }
    ]
  }
})