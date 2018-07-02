const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:{
    'index':'./src/index/js/index.js',
    'award':'./src/award/js/award.js',
    'login':'./src/award/js/award.js'
  },
  devServer:{
    contentBase : './dist'
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index/index.html',
      minify:true,
      chunks:['index']  
    }),
    new HtmlWebpackPlugin({
      filename:'award.html',
      template:'./src/award/index.html',
      minify:true,
      chunks:['award']  
    }),
    new HtmlWebpackPlugin({
      filename:'login.html',
      template:'./src/login/index.html',
      minify:true,
      chunks:['login']  
    })
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader:"css-loader",
              options:{
                url: false,
                minimize: true,
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(html|htm|)$/,
        use: [
          'html-withimg-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  }
}