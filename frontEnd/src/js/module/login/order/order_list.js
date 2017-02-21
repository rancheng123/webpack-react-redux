import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';



//分页
import Popagation from '../../../widget/popagation';

//分页
import OrderSearch from './order_search';





class orderList extends Component {
    constructor(){
        super();
    };

    componentWillMount(){
        this.getOrderList({
            pageNum:1,
            pageSize: 10
        })
    };

    getOrderList(opts){
        
    };

    addOrder(){

        fetch('./data/order/order_add.json')
            .then(response => response.json())
            .then(data => {
                if(data.status == 200){

                    this.getOrderList({
                        pageNum:1,
                        pageSize: 10
                    })
                }
            });
    };

    render() {
        var that = this;

        // 通过调用 connect() 注入:
        /*const { dispatch, user, orderList, popagation} = this.props;


        

        if(orderList.data && orderList.data.length){
            var ordersHTML = orderList.data.map(function(ele,i){
                return (
                    <div key={i}>{ele.text}</div>
                )
            });
        };

        //分页配置
        const popagationConfig = {
            callback: function(){

                that.getOrderList({
                    pageNum:popagation.pageNum,
                    pageSize: popagation.pageSize
                })
            }
        };
*/
        /*return (
            <div>

                <OrderSearch></OrderSearch>

                <div>{ordersHTML}</div>

                <Popagation config={popagationConfig}></Popagation>

                <input type="button" value="添加" onClick={this.addOrder.bind(this)}/>
            </div>
        )*/

        return (
            <div>

                
            </div>
        )
    }
};


export default orderList;









