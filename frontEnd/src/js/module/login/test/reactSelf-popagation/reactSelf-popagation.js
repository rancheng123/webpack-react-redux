import React, { Component, PropTypes } from 'react';
import classNames from 'classnames'



require('./reactSelf-popagation.scss');

class Propagation extends Component {
    constructor(){
        super()
        //设置初始状态，防止this.state为null报错
        this.state = {
            totalDataCount: 100,
            pageSize: 10,
            currentPageNum: 1
        };
    };
    componentDidMount(){
    	// 存储 start
    	componentStore.modules[this.props.$id] = this;
    	// 存储 end
    };
    componentWillUnmount(){
    	
		// 存储 start
    	componentStore.modules[this.props.$id] = null;
    	delete componentStore.modules[this.props.$id];
    	// 存储 end

    };
    clickFn(ev){
    	this.state.currentPageNum = ev.target.innerHTML;
    	this.switchPage();
    };
    preClick(){
		this.state.currentPageNum--;
		if(this.state.currentPageNum<=1){
			this.state.currentPageNum=1
		}
    	this.switchPage();
    };

    nextClick(){
    	this.state.currentPageNum++;
		if(this.state.currentPageNum>=this.state.totalPageCount){
			this.state.currentPageNum=this.state.totalPageCount;
		}
    	this.switchPage();
    };
    switchPage(){	
    	this.setState(this.state);
    	this.props.callback && this.props.callback(this.state.currentPageNum)
    };
    
    render(){

        var self = this;

 		//总页数 = 总条数/每页条数
        self.state.totalPageCount = Math.ceil( (self.state.totalDataCount/self.state.pageSize) );
        

        //此处循环有没有好办法？？？？？？？？？
        var tmlpArr = [];
        for(var i=0;i<self.state.totalPageCount;i++){
        	tmlpArr.push(i)
        };
       
        

		var lis = tmlpArr.map(function(ele,i){
			var pageNum = i+1;
			return (
				<span key={i} onClick={self.clickFn.bind(self)}
					className={classNames({
						"current": pageNum == self.state.currentPageNum
					})}
				>
					{pageNum}
				</span>
			)
		});

        return (
            <span className="reactSelf-popagation">
            	<span onClick={this.preClick.bind(self)}>上一页</span>
                {lis}
                <span onClick={this.nextClick.bind(self)}>下一页</span>
            </span>
        )
    }
};

export default Propagation;