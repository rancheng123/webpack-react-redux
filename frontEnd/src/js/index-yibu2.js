require('../scss/base/base.css')

//react
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link ,hashHistory} from 'react-router';

//组件管理器
import {} from './asset/componentStore';

//compents
                    //注意点   后面不能写.js后缀
/*import Index from './module/login/index';
import Login from './module/unlogin/login';
import ProductList from   './module/login/product/product_list';
import ProductAdd  from   './module/login/product/product_add';
import ProductDetail from './module/login/product/product_detail';
import orderList from     './module/login/order/order_list';*/



/*

 const product_list = (location, callback) => {
 require.ensure([], require => {
 callback(null, require('./module/login/product/product_list'))
 }, 'product_list')
 }

 const product_add = (location, callback) => {
 require.ensure([], require => {
 callback(null, require('./module/login/product/product_add'))
 }, 'product_add')
 }

 const product_detail = (location, callback) => {
 require.ensure([], require => {
 callback(null, require('./module/login/product/product_detail'))
 }, 'product_detail')
 }

 const order_list = (location, callback) => {
 require.ensure([], require => {
 callback(null, require('./module/login/order/order_list'))
 }, 'order_list')
 }
 */




const index = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/login/index'))
    }, 'home')
}

const login = (location, callback) => {
    require.ensure([], require => {
        callback(null, require('./module/unlogin/login'))
    }, 'home')
}

render((
        <div>
            <Router history={hashHistory}>
                <Route path="/" getComponent={login}></Route>
                <Route path="/login" getComponent={login}></Route>
                <Route path="/index" getComponent={index}></Route>
            </Router>    
        </div>
), document.getElementById('app'));


/*<Route path="/productList" getComponent={product_list} />
 <Route path="/productAdd"  getComponent={product_add} />
 <Route path="/productDetail" getComponent={product_detail} />

 <Route path="/orderList" getComponent={order_list} />*/



