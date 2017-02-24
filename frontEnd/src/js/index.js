require('../scss/base/base.css')

//react
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link ,hashHistory} from 'react-router';



const Login = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/unlogin/login').default)
    }, 'login')
}

//注意事项 不能叫做index.js
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



render((
        <div>
            <Router history={hashHistory}>
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




