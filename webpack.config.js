const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
    'index':'./src/index/js/index.js'
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index/index.html',
      minify:true,
      chunks:['index']  
    })
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
      },
      {
        test:/\.less$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader: 'css-loader'
          }, 
          {
            loader: 'less-loader' 
          }
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
}