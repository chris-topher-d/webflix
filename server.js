const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js configuration file as a base.

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'app', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
