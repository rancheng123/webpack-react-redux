var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var config = require('./webpack.config');

var server = new WebpackDevServer( webpack(config), {
	//publicPath: '/' + config.output.publicPath,
  	//contentBase: "./public",  //以public为根目录提供文件

    //inline: true,
    hot: true,

	//统计
    stats: { colors: true },

	//启用h5 historyApi
	historyApiFallback: true
});
server.listen(8388, "localhost", function() {
	console.log('服务器已启动')
});


/*
	问题 
		配置项都是什么意思

		listen 端口不起作用
*/
