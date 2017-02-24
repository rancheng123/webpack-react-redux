


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




















