


//�첽����

    //webpack����
        module.exports = {
            output: {
                path: dist_path,
                filename: '[name].js',

                //�첽�������ļ���
                chunkFilename: './modules11221/[name].[chunkhash:5].chunk.js',
                //���ﲻ�Ǻ���⣿��������������������������
                publicPath: 'http://localhost:8080/'
            }
        };
    //��react-router���

        //ע������ ���ܽ���index.js
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
                    //ע����� postcss-loader��Ҫ����style-loader,css-loader֮ǰ ��sass-loader֮��
                    loader: 'style-loader!css-loader?sourceMap!postcss-loader!sass-loader?sourceMap'
            }]
        }

        ����Ҫһ����Ϊpostcss.config.js�������ļ�������������
            module.exports = {
                plugins: [
                    //require('postcss-smart-import')({ /* ...options */ }),
                    //require('precss')({ /* ...options */ }),
                    require('autoprefixer')({ /* ...options */ })
                ]
            }









//webpack�������


     //webpack�첽����

         const Index = (location, callback) => {
             require.ensure([], require => {
                 callback(null, require('./module/login/index').default)
             }, 'index111'/* ���ﲻҪдindex,����������  index.7ef08.chunk.js*/)
         }


     //���������

            //React-router Invariant Violation: The root route must render a single element

                 const Login = (location, callback) => {
                     require.ensure([], require => {
                                                       //����취�� �첽����ģ��ʱ����default
                         callback(null, require('./module/unlogin/login').default)
                     }, 'login')
                 }



//webpack ͼƬ����ʾ

    //webpack����
        module.exports = {
            module: {
                loaders: [
                    {
                        test: /\.(jpeg|jpg|png|gif)$/,
                        /* limit=8192��С��8K��ͼƬת��base64�����ڴ����� */
                        loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
                    }
                ]
            }
        }



    //1. img ��ǩ
        <img src={require("./ran.jpg")} alt="22222222"/>
    // 2. css url

        //webpack�����б������� publicPath�� ������ʾ����
        module.exports = {
            output: {
                publicPath: 'http://localhost:8388/'
            }
        }





















