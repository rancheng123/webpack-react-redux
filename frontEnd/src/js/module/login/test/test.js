import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
require('./test.scss');






class TestSearch extends Component {
    constructor(){
        super();
    };
    componentDidMount(){
        // 存储 start
        componentStore.setById('TestSearch11',this);
        // 存储 end
    };
    componentWillUnmount(){

        // 存储 start
        componentStore.clearById('TestSearch11');
        // 存储 end

    };
    searchFn(){
        var that = this;
        
        /*fetch('/data/test.json')
        .then(response => response.json())
        .then(data => {
            if(data.status == 200){

                alert('ok')
            }
        });*/

        var requestData = {
            number: this.refs.number.value,
            name: this.refs.name.value,
            pageNum: 1
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
            <div className="testSearch"> 
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
            console.log(num)
        };

        return (
            <div>
                <TestSearch></TestSearch>
                <TestList></TestList>
                <div>
                    <Popagation callback={popagationCallback} $id="test_popagation1"></Popagation>
                </div>
                <div>
                    <Popagation callback={popagationCallback} $id="test_popagation2"></Popagation>
                </div>
                
            </div>
        )
    }
};

export default testWrap;

