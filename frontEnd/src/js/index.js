require('../scss/base/base.css')

//react
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link ,browserHistory} from 'react-router';
//组件管理器
import {} from './asset/componentStore';


const Login = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/unlogin/login').default)
    }, 'login')
}

//×¢ÒâÊÂÏî ²»ÄÜ½Ð×öindex.js
const home = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/login/home').default)
    }, 'home')
}

const product_list = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/login/product/product_list').default)
    }, 'product_list')
}

const product_add = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/login/product/product_add').default)
    }, 'product_add')
}

const product_detail = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/login/product/product_detail').default)
    }, 'product_detail')
}

const order_list = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/login/order/order_list').default)
    }, 'order_list')
}

/*测试  start*/
const test = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/login/test/test').default)
    }, 'test')
}
/*测试  end*/


render((
        <div>
            <Router history={browserHistory}>

                {/*测试  start*/}
                <Route path="/test" getComponent={test}></Route>
                {/*测试  end*/}


                <Route path="/" getComponent={Login}></Route>
                <Route path="/login" getComponent={Login}></Route>
                <Route path="/home" getComponent={home}>
                    <Route path="/productList" getComponent={product_list} />
                    <Route path="/productAdd"  getComponent={product_add} />
                    <Route path="/productDetail" getComponent={product_detail} />

                    <Route path="/orderList" getComponent={order_list} />
                </Route>
            </Router>    
        </div>
    
), document.getElementById('app'));




