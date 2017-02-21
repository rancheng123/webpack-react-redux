import React, { Component, PropTypes } from 'react';






class orderSearch extends Component {
    constructor(){
        super();
    };

    componentWillMount(){
    };
    render() {
        var that = this;
        return (
            <div>
                <input type="text" value="姓名" id=""/>
                <input type="text" value="状态" id=""/>
                <input type="button" value="搜索" id=""/>
            </div>
        )
    }
};


export default orderSearch;












