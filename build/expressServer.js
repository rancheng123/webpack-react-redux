var path = require('path');
var current_path = path.resolve(__dirname);
var src_path = path.resolve(current_path, '../frontEnd/src');


var express = require('express');
var webpack = require('webpack');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');
var compiler = webpack(config);
var app = express();

// ����webpack���
app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));
app.use(WebpackHotMiddleware(compiler));

var router = express.Router();


router.get('/*', function(req, res){
    //�������д����·��
    res.sendfile( path.resolve(current_path, '../frontEnd/dist/index.html')  );
});
app.use(router);

app.listen(8388, function () {
    console.log('Listening on 8388');
});