
import * as React from 'react';



/* 多级联动下拉框  start */
import 'rmc-picker/assets/index.css';
import 'rmc-cascader/assets/index.css';
import 'rmc-picker/assets/popup.css';
import Cascader from 'rmc-cascader';
var globalData = [
    {
        label: '北京',
        value: '01',
        children: [
            {
                label: '东城区',
                value: '01-1',
                children: [
                    {
                        label: '西四',
                        value: '01',
                    },
                    {
                        label: '西单',
                        value: '02',
                    }
                ]
            },
            {
                label: '西城区',
                value: '01-2',
            },
            {
                label: '崇文区',
                value: '01-3',
            },
            {
                label: '宣武区',
                value: '01-4',
            },
        ],
    },
    {
        label: '上海',
        value: '02',
        children: [
            {
                label: '黄埔区',
                value: '01-1',
            },
            {
                label: '黄埔区2',
                value: '01-2',
            },
            {
                label: '黄埔区3',
                value: '01-3',
            },
            {
                label: '黄埔区4',
                value: '01-4',
            },
        ],
    }
];
/* 多级联动下拉框  end */



/* 弹窗  start */
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
/* 弹窗  end */


const Demo = React.createClass({



    getInitialState() {
        return {
            visible: false,
        };
    },

    onChange(value) {
        console.log('onChange', value);

    },

    render() {

        var ModalOpt = {
            title: '这是 title',
            onClose: function(){
                alert('close')
            },
            onPress: function(){
                console.log('onPress'); this.onClose();
            }
        }

        return (
            <div>
                <Cascader
                    rootNativeProps={{'data-xx':'yy'}}
                    onChange={this.onChange}
                    data={globalData}

                    />


                <Modal
                    title="温情提示"
                    transparent
                    maskClosable={false}
                    visible={false}
                    onClose={ModalOpt.onClose}
                    footer={[{ text: '确定', onPress: function(){
                        console.log('onPress'); this.onClose();
                    } }]}
                    >
                    您的余额不足<br />
                    请充值.<br />
                </Modal>
            </div>
        );
    },
});

export default Demo;