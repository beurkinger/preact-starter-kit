const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',  
        options: {
          presets: 'env',
          plugins: ['inferno', 'transform-class-properties', 'transform-object-rest-spread']
        }   
      }
    }, {
      test: /\.css$/,
      use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      title: 'Inferno Boilerplate'
    }),
    new MiniCssExtractPlugin()
  ]
};
