var isOnline = (process.env.NODE_ENV == 'production');

/*path start*/
var path = require('path');
var current_path = path.resolve(__dirname);
var src_path = path.resolve(current_path, '../frontEnd/src');
var dist_path = path.resolve(current_path, '../frontEnd/dist');
/*path end*/


/*webpack插件 start*/
var webpack = require('webpack');


//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    filename: 'apps/vendors.js'
});



var HtmlWebpackPlugin= require('html-webpack-plugin');
var px2rem = require('postcss-px2rem');
var browserslist = require('browserslist');
/*webpack插件 end*/


var indexHtml = new HtmlWebpackPlugin({
	template: path.resolve(src_path,'index.html'),
	hash: true
});



var plugins = [
    commonsPlugin,
    indexHtml
];

if(isOnline){
    var uglifyJS = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: true,//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
        mangle: true
    });
    plugins.push(uglifyJS);

    //解决压缩后报错警告
    var AA = new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    });
    plugins.push(AA);
}








module.exports = {
    //插件项
    plugins:plugins,
    //页面入口文件配置
    entry: {
        vendors: [
            'react',
            'react-router',
            'react-dom',

            /*
             react-validation
             react-addons-css-transition-group
             react-addons-transition-group
             classnames

             Popagation组件 需要定义别名

            */


        ],
        index : path.resolve(src_path,'js/index.js')

    },
    output: {
        path: dist_path,
        filename: isOnline ? '[name].[chunkhash:5].js' : '[name].js'  ,
        chunkFilename: isOnline ? './modules/[name].[chunkhash:5].chunk.js' : './modules/[name].chunk.js' ,

        //此处配置域名，注意事项： 结尾必须加/ ，否则报错
        //publicPath: 'http://localhost:8388/',
        publicPath: isOnline ? '' : 'http://localhost:8388/'

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
                                require('autoprefixer')({
                                    browsers: browserslist('> 1%')
                                }),
                                require('postcss-px2rem')({
                                    remUnit: 100
                                })
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
                test: /\.(jpeg|jpg|png|gif)$/,
                /* limit=8192是小于8K的图片转成base64内联在代码中 */
                loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'

                //html中使用  <img src={require("./ran.jpg")} alt="22222222"/>

            },


            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },


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

