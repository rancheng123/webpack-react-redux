


//异步加载

    //webpack配置
        module.exports = {
            output: {
                path: dist_path,
                filename: '[name].js',

                //异步生产的文件名
                chunkFilename: './modules11221/[name].[chunkhash:5].chunk.js',
                //这里不是很理解？？？？？？？？？？？？？？
                publicPath: 'http://localhost:8080/'
            }
        };
    //与react-router配合

        //注意事项 不能叫做index.js
        const Index = (location, callback) => {
            require.ensure([], require => {
                callback(null, require('./module/login/index').default)
            }, 'index111')
        }


        const Login = (location, callback) => {
            require.ensure([], require => {
                callback(null, require('./module/unlogin/login').default)
            }, 'login')
        }

        render((
            <div>
                <Router history={hashHistory}>
                    <Route path="/" getComponent={Login}></Route>
                    <Route path="/login" getComponent={Login}></Route>
                    <Route path="/index" getComponent={Index}>
                    </Route>
                </Router>
            </div>

        ), document.getElementById('app'));



//2 postcss-loader

        module: {
            loaders: [{
                    test: /\.scss$/,
                    //注意事项： postcss-loader需要放在style-loader,css-loader之前 ，sass-loader之后
                    loader: 'style-loader!css-loader?sourceMap!postcss-loader!sass-loader?sourceMap'
            }]
        }

        还需要一个名为postcss.config.js的配置文件，其内容如下
            module.exports = {
                plugins: [
                    //require('postcss-smart-import')({ /* ...options */ }),
                    //require('precss')({ /* ...options */ }),
                    require('autoprefixer')({ /* ...options */ })
                ]
            }









//webpack搭建的问题


     //webpack异步加载

         const Index = (location, callback) => {
             require.ensure([], require => {
                 callback(null, require('./module/login/index').default)
             }, 'index111'/* 这里不要写index,否则不能生成  index.7ef08.chunk.js*/)
         }


     //浏览器报错

            //React-router Invariant Violation: The root route must render a single element

                 const Login = (location, callback) => {
                     require.ensure([], require => {
                                                       //解决办法： 异步加载模块时加上default
                         callback(null, require('./module/unlogin/login').default)
                     }, 'login')
                 }



//webpack 图片不显示

    //webpack配置
        module.exports = {
            module: {
                loaders: [
                    {
                        test: /\.(jpeg|jpg|png|gif)$/,
                        /* limit=8192是小于8K的图片转成base64内联在代码中 */
                        loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
                    }
                ]
            }
        }



    //1. img 标签
        <img src={require("./ran.jpg")} alt="22222222"/>
    // 2. css url

        //webpack配置中必须设置 publicPath， 才能显示出来
        module.exports = {
            output: {
                publicPath: 'http://localhost:8388/'
            }
        }





















