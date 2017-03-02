import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
require('./test.scss');






class TestSearch extends Component {
    constructor(){
        super();
    };
    componentDidMount(){
        // 存储 start
        componentStore.setById('TestSearch',this);
        // 存储 end
    };
    componentWillUnmount(){

        // 存储 start
        componentStore.clearById('TestSearch');
        // 存储 end

    };
    searchFn(){
        var that = this;
        

        //'api/test/search'

        //代理？？？
        //fetch多个请求


        
        var req = new Request('http://localhost:3000/api/test/search', {
            method: 'post', 
            //不缓存响应的结果
            cache: 'reload',
            body: {
                a: 1,b: 2
            }
        });  

        fetch(req)
        .then(response => response.json())
        .then(data => {
            debugger;
            if(data.status == 200){

                alert('ok')
            }
        });

        var requestData = {
            number: this.refs.number.value,
            name: this.refs.name.value,
            pageNum: componentStore.getById('test_popagation1').state.currentPageNum
        }


        var responseData = [{
            name: 'new-item1'
        },{
            name: 'new-item2'
        },{
            name: 'new-item3'
        }];

        var testListComp = componentStore.getById('TestList');
        testListComp.state.data = responseData;
        testListComp.setState(testListComp.state);

    };
    render(){
        var self = this;
        

        return (
            <div className="testSearch css3Test"> 
                数量：<input type="text" ref="number"/>
                名称：<input type="text" ref="name" />
                <input type="button" value="查询" onClick={this.searchFn.bind(self)} />
            </div>
        )
    }
};


class TestList extends Component {
    constructor(){
        super()

        //设置初始状态，防止this.state为null报错
        this.state = {
            data: []
        }
    };
    componentDidMount(){
        componentStore.setById('TestList',this);

        this.state.data = [{
            name: 'old-item1'
        },{
            name: 'old-item2'
        },{
            name: 'old-item3'
        }];
        this.setState(this.state)

    };
    componentWillUnmount(){

        // 存储 start
        componentStore.clearById('TestList');
        // 存储 end

    };
    
    render(){

        var self = this;
        var lis = self.state.data.map(function(ele,i){
            return (
                <li key={i}>{ele.name}</li>
            )
        })

        return (
            <ul>
                {lis}
            </ul>
        )
    }
};


import Popagation from './reactSelf-popagation/reactSelf-popagation';


class testWrap extends Component {
    constructor(){
        super();
    };

    componentDidMount(){
        componentStore.setById('testWrap',this);
    }
    componentWillUnmount(){
        componentStore.clearById('testWrap')
    }

    render(){

        var popagationCallback = function(num){


            var requestData = {
                number: componentStore.getById('TestSearch').refs.number.value,
                name: componentStore.getById('TestSearch').refs.name.value,
                pageNum: num
            }




            var responseData = [{
                name: 'old-item1'
            },{
                name: 'old-item2'
            },{
                name: 'old-item3'
            }];

            var testListComp = componentStore.getById('TestList');
            testListComp.state.data = responseData;
            testListComp.setState(testListComp.state);

        };

        return (
            <div>
                <TestSearch></TestSearch>
                <TestList></TestList>
                <div>
                    <Popagation callback={popagationCallback} $id="test_popagation1"></Popagation>
                </div>

                <div className="testRem">
                    
                </div>





                <img src={require("./ran.jpg")} alt="22222222"/>

                <div className="testUrlLoader">此图为何不显示</div>
                <div className="testUrlLoader2"></div>

                
            </div>
        )
    }
};

export default testWrap;

