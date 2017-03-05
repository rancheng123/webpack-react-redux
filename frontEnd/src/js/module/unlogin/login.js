import React, { Component, PropTypes } from 'react';
import { browserHistory} from 'react-router';

class Login extends Component {
    constructor(){
        super()
    };

    login(){

        //页面无刷新切换路由
        browserHistory.push('/home');
    }

    render(){
        return (
            <div id="login">
                <div>
                    姓名：<input type="text" />
                </div>
                <div>
                    密码：<input type="password" />
                </div>
                <div>
                    <input type="button" value="登录" onClick={this.login}/>
                </div>
            </div>
        )
    }
};

export default Login;

