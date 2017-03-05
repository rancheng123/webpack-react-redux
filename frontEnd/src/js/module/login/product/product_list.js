import React, { Component, PropTypes } from 'react';
import { browserHistory} from 'react-router';

class ProductList extends Component {
    constructor(){
        super()
    };

    productAdd(){
        //页面无刷新切换路由
        browserHistory.push('/productAdd');
    }

    productDetail(){
        //页面无刷新切换路由
        browserHistory.push('/productDetail');
    }

    render(){
        return (
            <div>
                <div>
                    <input type="button" value="添加" onClick={this.productAdd}/>
                </div>
                <ul>
                    <li>
                        <span>Car 100$</span>
                        <input type="button" value="查看详情" onClick={this.productDetail}/>
                    </li>
                </ul>
            </div>
        )
    }
};

export default ProductList;

