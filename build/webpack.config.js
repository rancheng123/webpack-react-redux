
/*path start*/
var path = require('path');
var current_path = path.resolve(__dirname);
var src_path = path.resolve(current_path, '../frontEnd/src');
var dist_path = path.resolve(current_path, '../frontEnd/dist');
/*path end*/


/*webpack插件 start*/
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var HtmlWebpackPlugin= require('html-webpack-plugin');
var px2rem = require('postcss-px2rem');
/*webpack插件 end*/



var indexHtml = new HtmlWebpackPlugin({
	template: path.resolve(src_path,'index.html'),
	hash: true
})

var testPlugin = new webpack.LoaderOptionsPlugin({
    options: {
      postcss: function () {
        return [px2rem({remUnit: 75})];
      }
    }
  });



module.exports = {
    //插件项
    plugins: [
    	commonsPlugin,
    	indexHtml
        //testPlugin
    ],
    //页面入口文件配置
    entry: {
        index : path.resolve(src_path,'js/index.js')
    },
    //入口文件输出配置 md5????????????????????
    output: {
        path: dist_path,
        filename: '[name].js',

        chunkFilename: './modules11221/[name].[chunkhash:5].chunk.js',
        //publicPath: dist_path
        publicPath: 'http://localhost:8080/'
    },
    //设置为true(修改后自动执行webpack 命令)
    watch: true,
    //chrome source-map调试（chrome引入了source-map文件，标识es5代码对应的转码前的es6代码哪一行）
    devtool: 'source-map',
    //devtool: "#eval-source-map",

    module: {

        /*
         注意点：
         需要提前加载插件 style-loader
         css-loader
         sass-loader
         jsx-loader
         url-loader
         通过cnpm install jsx-loader --save-dev
         */


        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                // 匹配不希望处理文件的路径
                exclude: /(node_modules|bower_components)/,
                //ES2015转码规则       react转码规则
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            

            {
                test: /\.scss$/,
                loader: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },

                    //注意事项： 
                    //postcss-loader需要放在style-loader,css-loader之前 ，sass-loader之后
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                //require('postcss-smart-import')({ /* ...options */ }),
                                //require('precss')({ /* ...options */ }),
                                require('autoprefixer')({ /* ...options */ })
                              ]
                        }
                    },



                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },



            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.json', '.scss'],

        //模块别名定义，方便后续直接引用别名，无须多写长长的地址（请求重定向）
        alias: {
            AppStore : 'js/stores/AppStores.js',  //后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};

