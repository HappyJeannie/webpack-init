const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
console.log(1111);
module.exports = merge(baseWebpackConfig,{
  devtool:'inline-source-map',
  output:{
    filename:'js/[name][hash].bundle.js',
    path:path.resolve(__dirname,'../dist')
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
        sourceMap: false,
        cache : true,
        parallel : true,
        uglifyOptions:{
            compress:{
                drop_console:true
            }
        }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name][hash].css'
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