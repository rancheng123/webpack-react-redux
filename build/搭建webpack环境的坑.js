


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




















