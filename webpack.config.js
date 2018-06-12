const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.scss$/, use: [
        { loader: MiniCssExtractPlugin.loader },
        {
          loader: 'css-loader',
          options: { minimize: true }
        },
        { loader: 'sass-loader' }
        // fallback to style-loader in development
        // process.env.NODE_ENV !== 'production' ? 'sytle-loader' : MiniCssExtractPlugin.loader,
        // "css-loader",
        // "sass-loader"
      ]}
    ]
  },
  devServer: {
    contentBase: 'app/ui/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    outputPath: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
},
  plugins: [
    new HtmlWebpackPlugin({ template: 'app/index.html'}),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
