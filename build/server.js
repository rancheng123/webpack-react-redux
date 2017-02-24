var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var config = require('./webpack.config');



console.log('3333333333')
console.log(config.output.publicPath)

var server = new WebpackDevServer( webpack(config), {
	publicPath: '/' + config.output.publicPath,
  	contentBase: "./public",  //以public为根目录提供文件
    historyApiFallback: true,
    inline: true,
    hot: true
});
server.listen(8888, "localhost", function() {
	console.log('服务器已启动')
});


/*
	问题 
		配置项都是什么意思

		listen 端口不起作用
*/
