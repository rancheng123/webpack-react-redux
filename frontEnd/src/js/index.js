//react
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link ,hashHistory} from 'react-router';

//组件管理器
import {} from './asset/componentStore';

//compents
                    //注意点   后面不能写.js后缀
import Index from './module/login/index';
import Login from './module/unlogin/login';
import ProductList from   './module/login/product/product_list';
import ProductAdd  from   './module/login/product/product_add';
import ProductDetail from './module/login/product/product_detail';
import orderList from './module/login/order/order_list';


/*测试 start*/
import test from './module/login/test/test';
/*测试 end*/






render((
        <div>
            <Router history={hashHistory}>

                
                {/*测试 start*/}
                <Route path="/test" component={test}></Route>
                {/*测试 end*/}

                <Route path="/" component={Login}></Route>
                <Route path="/login" component={Login}></Route>

                <Route path="/index" component={Index}>
                    <Route path="/productList" component={ProductList} />
                    <Route path="/productAdd"  component={ProductAdd} />
                    <Route path="/productDetail" component={ProductDetail} />

                    <Route path="/orderList" component={orderList} />
                </Route>
            </Router>    
        </div>
    
), document.getElementById('app'));



